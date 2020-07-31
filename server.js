const express = require('express');
const app = express();
// connect to database
const cron = require("node-cron");
var admin = require("firebase-admin");
var serviceAccount = require("./routes/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://information-management-s-c7f1c.firebaseio.com"
});
const moment = require('moment');
require('dotenv').config()
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const twilioNumber = '+12029725135'
cron.schedule("* * * * *", function() {
  let key;
    const now = moment();
    const dateFormatted = now.format('DDMMYYYY'); 
    
    admin.database().ref('users/EMIDates/date').once('value').then(snapshot => {
        let date=snapshot.val().date;
        let phone=snapshot.val().phone;
        let amount=snapshot.val().amount;
        key=snapshot.key;
        console.log(date);
        if(date==dateFormatted){
            client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
        body:`Your Loan EMI is ${amount} to be paid at ${date}. Kindly Ignore this message paid already.`
      })
        .then(message => console.log(message,'success'))
            .catch(err => console.log(err));
        }
    });
     admin.database().ref('users/EMIDates/date').child(key).remove();
  });
// Initalize middleware
app.use(express.json({ extended: false }));

// define routes
app.use('/api/payment', require('./routes/api/payment'));
app.use('/api/sms', require('./routes/api/sms'));


app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
