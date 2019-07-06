var cron = require('node-cron');
var goal_config = require('../models/goal_config')
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilioPhone = process.env.twilioPhone
const client = require('twilio')(accountSid, authToken);




/*
Cron schedule to establish time stamps and execute functions
to query the databse for texts and calls that need to be made
*/
cron.schedule('*/15 * * * * *', () => {

//Generate Current Time
var d = new Date();
var h = d.getHours();
var m = ("0" + d.getMinutes()).slice(-2);
var textTime = `* ${m} ${h} * * *`

//Generate Date in needed format
var dd = ("0" + d.getDate()).slice(-2)
var mm = ("0" + (d.getMonth() + 1)).slice(-2)
var yyyy = d.getFullYear();
var curDate = `${yyyy}-${mm}-${dd}`;

//Modify current time to trigger calls 2 hours prior 
var cH = h + 2;
var callTime = `* ${m} ${cH} * * *`

//format to update time stamp on SQL
var texted = { last_fired: `${curDate}` }
var called = { last_called: `${curDate}` }

  console.log(`
running ${h}:${m} | ${curDate} | ${textTime} | ${callTime}
  `)
  queryAlerts(textTime, texted)
  queryCalls(callTime, called)
});

//query mysql for Text Alerts

function queryAlerts(textTime, texted) {
  goal_config.allGoals(function (result) {
    // console.log(result)

    //loop api response for data formatting to twilio API
    console.log(`Texts Phone -   ID  - Goal Name - Time`)
    for (i = 0; i < result.length; i++) {
      var time = result[i].daily_occurance
      var phone = result[i].phone
      var id = result[i].id
      var goalName = result[i].name
      // console.log(time)
      console.log(`Texts ${phone} - ${id} - ${goalName} - ${time}`)
    }

    //if the time the user needs to be reminded matches the current time
    if (time === textTime) {
      console.log("text match", id)

      sendText(goalName, phone)
      updateTable(texted, id)
    } else {
      console.log("No texts to Send")
    }
  })
}

function queryCalls(callTime, called) {
  goal_config.callGoals(function (result) {
    // console.log(result)
    console.log(`CALLS Phone -   ID  - Goal Name - Time`)
    //loop api response for data formatting to twilio API
    for (i = 0; i < result.length; i++) {
      var time = result[i].daily_occurance
      var phone = result[i].phone
      var id = result[i].id
      var goalName = result[i].name
      // console.log(time)
      console.log(`Calls ${phone} - ${id} - ${goalName} - ${time}`)
    }

    //if the time matches 2 hours prior to the current time, send the call
    if (time === callTime) {
      console.log("call match", id)
      callUser(phone, id)
      updateTable(called, id)
    } else {
      console.log("No Calls to send")
    }
  })
}

function sendText(goalName, phone) {

  let msg = `Guess you're not gonna ${goalName} today`

  console.log(msg);

  // send text via twillio  
  client.messages
    .create({
      body: `${msg}`,
      from: `+1${twilioPhone}`,
      to: `+1${phone}`
    })
    .then(message => console.log(message.sid));

}
//Call User via Twilio 
function callUser(phone, id) {

  client.calls
    .create({
      //url must be PUBLIC address, in order for Twilio text-2-speech module to function
      //an xml page must be generated with the text to be read off, and it must be public
      url: `https://agile-wildwood-70962.herokuapp.com/api/twiml/${id}`,
      to: `+1${phone}`,
      from: `+1${twilioPhone}`
    })
    .then(call => console.log(call.sid));
}

//update the table both for texts and calls so that duplicates are not made in the same day
function updateTable(update, id) {
  goal_config.updateOne(update, id, function (data) {
    console.log(`Updated ${id}: ${update}`)
    console.log(data)
  });



}

