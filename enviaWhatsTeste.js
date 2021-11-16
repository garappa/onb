const accountSid = 'AC62b10af003b796b72ea88869aabca835';
const authToken = '23ae4da510ce8547aa8d32bdf0acd723';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'VIA NODEEEEE JS',
         from: 'whatsapp:+14155238886',      
         to: 'whatsapp:+5511965610090'
       })
      .then(message => console.log(message.sid))
      .done();