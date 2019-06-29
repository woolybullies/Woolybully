var cron = require('node-cron');



// client.messages
//   .create({
//     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//     from: '+13125846791',
//     to: '+17084769340'
//   })
//   .then(message => console.log(message.sid));



var users = [
  // {
  //   name: "bill",
  //   time: '* * * * * *',
  //   message: "Gym",
  //   tUN: "bill@gmail",
  //   tPW: "iashf84",
  // },
  {
    name: "tim",
    time: '*/1 * * * *',
    message: "Dishes",
    tUN: "tim@gmail",
    tPW: "igsgrg",
  }
  // ,
  // {
  //   name: "bill",
  //   time: '*/3 * * * *',
  //   message: "Save $10",
  //   tUN: "bill@gmail",
  //   tPW: "kh8yyhuhi",
  // }
];

function push() {
  const accountSid = 'AC5e07a56b471f643ce750033518d5bed1';
  const authToken = '30c27ebf3d2276a0276b576905ca2410';
  const client = require('twilio')(accountSid, authToken);
  for (i = 0; i < users.length; i++) {
    let name = users[i].name
    let time = users[i].name
    let message = users[i].message
    let tUn = users[i].tUN
    let tPW = users[i].tPW
    console.log(users[i].name)
    cron.schedule(users[i].time, () => {
      let msg = `Oh ${name}, guess who didnt ${message} today`

      // console.log(`mock ajax call for twitter UN:${tUn} PW:${tPW}`)
      console.log(msg);
      client.messages
        .create({
          body: `${msg}`,
          from: '+13125846791',
          to: '+17084769340'
        })
        .then(message => console.log(message.sid));

    });
  }
}
push()