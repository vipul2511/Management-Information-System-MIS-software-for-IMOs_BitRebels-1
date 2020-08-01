import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
const stripe =    loadStripe('pk_test_izTRazS0reCuAYbvSfCVkfAQ004KviIEJL');
class PaymentID extends React.Component {
  doPayment =() => {
   
    const paymentBtn = document.getElementById('stripe-payment-btn');
    let sessionId;
    paymentBtn.addEventListener('click', () => {
      let orderData = {
      currency: 'EUR',
      quantity: 1,
      amount: 100,
      name: 'Some product',
      description: 'Product description',
      image: 'https://image-url/',
      customerEmail: 'vshrimali709@gmail.com',
      clientId: '12345'
    }
    // Url to Firebase function
   window.fetch('https://us-central1-information-management-s-c7f1c.cloudfunctions.net/createOrderAndSession', {
     method:'POST',
      // Adding the order data to payload
      body: JSON.stringify(orderData)
      }).then(response => {
        return console.log("This is "+response.json());
      
      }).then(data => {
        // Getting the session id from firebase function
        var body = JSON.parse(data.body);
        return sessionId = body.sessionId;
      }).then(sessionId => {
        // Redirecting to payment form page
       const {error}=stripe.redirectToCheckout({
          sessionId: sessionId
        }).then(result=> {
         console.log(result)
         console.log(error.message);
        });
      });
    });
    
    
  }
// doPayment = async () => {
//   fetch('https://us-central1-information-management-s-c7f1c.cloudfunctions.net/charge', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       amount: 10,
//       currency: "usd",
//     }),
//   })
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson);
//     })
//     .catch((error) => {
//       console.error(error);
//     });;
// }
  render() {
    return(
       <div id="stripe-payment-btn">
 <button className="btn" onClick={this.doPayment}> Click here</button>
    </div>
    );
  }
}
export default PaymentID;