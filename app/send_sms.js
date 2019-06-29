// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC5e07a56b471f643ce750033518d5bed1';
const authToken = '30c27ebf3d2276a0276b576905ca2410';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13125846791',
     to: '+17084769340'
   })
  .then(message => console.log(message.sid));
