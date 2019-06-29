var cron = require('node-cron');
 

var users = [
    {
      name: "bill",
      time: '* * * * * *',
      message: "Gym",
      tUN: "bill@gmail",
      tPW: "iashf84",
    },
    {
        name: "tim",
        time: '*/2 * * * *',
        message: "Dishes",
        tUN: "tim@gmail",
        tPW: "igsgrg",
    },
    {
        name: "bill",
        time: '*/3 * * * *',
        message: "Save $10",
        tUN: "bill@gmail",
        tPW: "kh8yyhuhi",
    }
  ];

function push (){
    
    for (i = 0; i < users.length; i++){
		let name = users[i].name
		let time = users[i].time
		let message = users[i].message
		let tUn = users[i].tUN
		let tPW = users[i].tPW
        console.log(users[i].name)
        cron.schedule(users[i].time, () => {
            let msg = `Oh ${name}, guess who didnt ${message} today`
            
            console.log(`mock ajax call for twitter UN:${tUn} PW:${tPW}`)
            console.log(msg);
          });
    }
}
push()