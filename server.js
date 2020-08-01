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
  let Data=[];
  admin.database().ref('users/').child('EMI/').orderByKey().on('child_added',function(snapshot){
    Data.push(snapshot.key);
  });
    const now = moment();
    const dateFormatted = now.format('DD/M/YYYY');
    console.log(dateFormatted);
    Data.forEach(item=>{
    admin.database().ref('users/').child('EMI/'+item).limitToFirst(1).on('child_added',snapshot => {
        let amount=snapshot.val().scheduled_payment;
        let phone=snapshot.val().phone;
        let date=snapshot.val().payment_date;
        key=snapshot.key;
        console.log(`the date is ${date}`);
        console.log(`the data item ${Data}`);
        console.log(snapshot.val())
        if(date==dateFormatted){
            client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: '+91'+phone,
        body:`Your Loan EMI is ${amount} to be paid at ${date}. Kindly Ignore this message paid already.`
      })
        .then(message => console.log(message,'success'))
            .catch(err => console.log(err));
        }
    });
  });
    
    //  admin.database().ref('users/EMIDates/date').child(key).remove();
    console.log("running all the time");
  });
// Initalize middleware
app.use(express.json({ extended: false }));

// define routes
app.use('/api/payment', require('./routes/api/payment'));
app.use('/api/sms', require('./routes/api/sms'));


app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
