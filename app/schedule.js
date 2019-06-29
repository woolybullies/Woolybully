var cron = require('node-cron');
var goal_config = require('../models/goal_config')






// cron.schedule('*/2 * * * * *', () => {
//   var d = new Date();
// var n = d.getHours();
//   console.log("running", n )
//   goal_config.allGoals(function (result){
//     console.log(result)
//   })

  
// });





// function push() {
//   const accountSid = 'AC5e07a56b471f643ce750033518d5bed1';
//   const authToken = '30c27ebf3d2276a0276b576905ca2410';
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
