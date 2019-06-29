var cron = require('node-cron');
var goal_config = require('../models/goal_config')





//cron schedule to query for what users need to be reminded
cron.schedule('*/30 * * * * *', () => {
  var d = new Date();
  var n = d.getHours();
  var cTime = `* * ${n} * * *`
  console.log("running", n)

  goal_config.allGoals(function (result) {
    console.log(result)
    
    
      
        if (time = cTime) {

          for (i = 0; i < result.length; i++) {
            let name = result[i].name
            
            let phone = result[i].phone
            
            console.log(name)
    

          cron.schedule(time, () =>  {
          const accountSid = process.env.accountSid;
          const authToken = process.env.authToken;
          const client = require('twilio')(accountSid, authToken);
      

          let msg = `Guess who didnt ${name} today`
          console.log(msg);
          client.messages
            .create({
              body: `${msg}`,
              from: '+13125846791',
              to: `+1${phone}`
            })
            .then(message => console.log(message.sid));

          });  
        } 
      }

    });
});





// function push() {
//   const accountSid = process.env.accountSid;
//   const authToken = process.env.authToken;
//   const client = require('twilio')(accountSid, authToken);
//   for (i = 0; i < userObject.length; i++) {
//     let name = userObject[i].name
//     let message = userObject[i].daily_occurance
//     let phone = userObject[i].phone
//     // let tUn = userObject[i].tUN
//     // let tPW = userObject[i].tPW
//     console.log(userObject[i].name)
//     cron.schedule(userObject[i].time, () => {
//       let msg = `Oh ${name}, guess who didnt ${message} today`

//       // console.log(`mock ajax call for twitter UN:${tUn} PW:${tPW}`)
//       console.log(msg);
//       client.messages
//         .create({
//           body: `${msg}`,
//           from: '+13125846791',
//           to: '+17084769340'
//         })
//         .then(message => console.log(message.sid));

//     });
//   }
// }
// push()
