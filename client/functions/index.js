const functions = require('firebase-functions');
// We should install required packages (stripe, body-parser) using npm install inside /functions/ folder
const cors = require('cors')({ origin: true });
const moment = require('moment');
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://information-management-s-c7f1c.firebaseio.com"
});

const twilio = require('twilio');
const accountSid = functions.config().twillio.sid
const authToken  = functions.config().twillio.token

const client = new twilio(accountSid, authToken);

const twilioNumber = '+12029725135'

exports.sendDailyNotifications = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const now = moment();
        const dateFormatted = now.format('DDMMYYYY');
         
        const textMessage = {
            body: 'Current order status',
            to: 9079947710,  // Text to this number
            from: twilioNumber // From a valid Twilio number
        }

      return  admin.database().ref('users/EMIDates/date').once('value').then(snapshot => {
            let date=snapshot.val();
            if(date==dateFormatted){
                client.messages.create(textMessage).then(message => console.log(message.sid, 'success'))
                .catch(err => console.log(err));
            }
        })

    });

});



