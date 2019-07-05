var cron = require('node-cron');
var goal_config = require('../models/goal_config')

var d = new Date();

var h = d.getHours();
var cH = h - 2;
var m = ("0" + d.getMinutes()).slice(-2);


var dd = ("0" + d.getDate()).slice(-2)
var mm = ("0" + (d.getMonth() + 1)).slice(-2)
var yyyy = d.getFullYear();

var curDate = `${yyyy}-${mm}-${dd}`;
//format to update time stamp on SQL
var upd = { last_fired: `${curDate}` }
var textTime = `* ${m} ${h} * * *`
var callTime = `* ${m} ${cH} * * *`



//cron schedule to query for what users need to be reminded
cron.schedule('*/15 * * * * *', () => {
  //set the current date for posting to sql  


  console.log(`
running ${h} ${curDate} ${textTime}
  `)
  queryAlerts(textTime, upd)
});

//query mysql for alerts for today

function queryAlerts(textTime, upd) {
  goal_config.allGoals(function (result) {
    // console.log(result)

    //loop api response for data formatting to twilio API
    for (i = 0; i < result.length; i++) {
      var time = result[i].daily_occurance
      var phone = result[i].phone
      var id = result[i].id
      var goalName = result[i].name
      // console.log(time)
      console.log(`${phone} - ${id} - ${goalName} - ${time}`)
    }

    //if the time the user needs to be reminded matches the current time
    if (time === textTime) {
      console.log("match", id)

      sendText(goalName)
      updateTable(upd, id)

    // } else if (time = callTime) {
    //   callUser(goalName)
    } else {
      console.log("nothing to send")
    }










function sendText(goalName) {

  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  const client = require('twilio')(accountSid, authToken);


  let msg = `Guess you're not gonna ${goalName} today`

  console.log(msg);

 // send text via twillio  
  client.messages
    .create({
      body: `${msg}`,
      from: '+13125846791',
      to: `+1${phone}`
    })
    .then(message => console.log(message.sid));


  console.log(data)


}

function updateTable(upd, id) {
  goal_config.updateOne(upd, id, function (data) {
    console.log(`Updated ${id}: ${upd}`)
  });



}

// function callUser(phone, id){

//   client.calls
//   .create({
//      url: `http://733a1d7d.ngrok.io/api/twiml${id}`,
//      to: `+1${phone}`,
//      from: '+13125846791'
//    })
//   .then(call => console.log(call.sid));
// }