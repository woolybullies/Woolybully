var cron = require('node-cron');
var goal_config = require('../models/goal_config')


//cron schedule to query for what users need to be reminded
cron.schedule('*/15 * * * * *', () => {
  //set the current date for posting to sql  
  var d = new Date();

  var h = d.getHours();
  var m = ("0" + d.getMinutes()).slice(-2)

  var dd = ("0" + d.getDate()).slice(-2)
  var mm = ("0" + (d.getMonth() + 1)).slice(-2)
  var yyyy = d.getFullYear();

  var curDate = `${yyyy}-${mm}-${dd}`;
  //format to update time stamp on SQL
  var upd = { last_fired: `${curDate}` }
  var cTime = `* ${m} ${h} * * *`
  
  console.log(`

  running ${h} ${curDate} ${cTime}
  `)
//  queryAlerts(cTime, upd)
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
    if (time === cTime) {
      console.log("match", id)
     
      // console.log(`${phone} - ${id} - ${goalName}`)
      sendText(goalName)
      updateTable(upd, id)
    
    } else{
     console.log("nothing to send")
    }
  


});
});



function queryAlerts (cTime, upd){
  //query sql for any goals that need reminding
  

  
  
  }




function sendText (goalName){
  // cron.schedule(time, () => {
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  const client = require('twilio')(accountSid, authToken);


  let msg = `Guess you're not gonna ${goalName} today`

  console.log(msg);
  // client.messages
  //   .create({
  //     body: `${msg}`,
  //     from: '+13125846791',
  //     to: `+1${phone}`
  //   })
  //   .then(message => console.log(message.sid));

  
    // console.log(data)
  // });

}

function updateTable (upd, id){
  goal_config.updateOne(upd, id, function (data) {
    console.log(`Updated ${id}: ${upd}`)
  });
  


}

