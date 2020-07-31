const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_GZGN91z27sv5Zx530BAEG4Wh00NsOaGaSD');
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

router.post("/", async (req, res) => {
    // Create a PaymentIntent with the order amount and currency
    console.log(req.body);
    const {payment_method_id,amount}=req.body;
    try {
        let paymentIntent;
        console.log("running");
         paymentIntent = await stripe.paymentIntents.create({
            payment_method:payment_method_id,
            amount:amount*100,
            currency: "inr",
           
          });
           console.log(paymentIntent);
          res.send({
            clientSecret: paymentIntent.client_secret
          });
    } catch (error) { 
      console.log(error);    
    }
  });
 

  module.exports = router;