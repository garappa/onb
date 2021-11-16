// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')('AC554210b43180eb6f2b4a89045fd0640e', 'a4a2d5bcacf44423233ede91fd643894');

client.messages
      .create({body: 'Olá, gostaria de antecipar seus recebiveis? Caso tenha interesse vamos conversar, me chama no whats encurtador.com.br/HKS02', from: '+17603136144', to: '+5511971158796'})
      .then(message => console.log(message.sid));
