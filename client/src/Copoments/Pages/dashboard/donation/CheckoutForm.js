import React from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import Button from "react-bootstrap/Button";
import CardSection from './CardSection';
import './CheckoutForm.css';
import "./donation.css";


class CheckoutForm extends React.Component {
   constructor(props){
     super(props);
    this.state={
      ClientKey:null,
      DonationAmount:null
    }
   }
   
   handleChange=({target})=>{
    this.setState({ DonationAmount:target.value});
     }
    openModel=()=>{
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
    }
 
  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const {stripe, elements} = this.props
console.log(this.props);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }
     
    let Amount;
    Amount=this.state.DonationAmount;

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        // Include any additional collected billing details.
        name: 'Varshang Shrimali',
      },
    });

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {

      
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      stripeTokenHandler(result);
      console.log(result);
     async function stripeTokenHandler (token) {
        // Use fetch to send the token ID and any other payment data to your server.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
       let BodyData={
          payment_method_id: result.paymentMethod.id,
          amount:Amount
        }
          const response = await fetch("/api/payment", {
            method: 'POST',
            body:JSON.stringify(BodyData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
          }).then(function(response) {
            // Handle server response (see Step 4)
            response.json().then( async function(ResponseJson) {
      let clientSecret = ResponseJson.clientSecret;
      const confirmCardPayment = await stripe.confirmCardPayment(clientSecret).then(function(response){
        if(response.error){
          alert("see message"+response.error);
        }else if(response.paymentIntent && response.paymentIntent.status === 'succeeded'){
          window.location.href="/Home"
        }
      })
          console.log(confirmCardPayment);
            })   
          });
      
       
      
        // Return and display the result of the charge.
       
      }
      
    }
    
  };

  render() {
    return (
      <div >
          <div className="slider-area">
        <div className="slider-active">
       
            <div className="single-slider slider-height d-flex align-items-center">
          
                <div className="container">
            
                    <div className="row">
                   
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                        <div className= "char"> Charity For COVID-19</div>
                            <div className="hero__caption">
                             
                                <div data-animation="fadeInUp" data-delay=".6s" className="headerheading">Our Helping to<br/> the world.</div>
                                <p data-animation="fadeInUp" data-delay=".8s" className="para_DON" >“Better to wear a mask than a ventilator; better to stay at home than in an ICU.”</p>
                             
                                <div className="hero__btn">
            
                                    <button id="myBtn"  className="btn5 hero-btn2 mb-10"  data-animation="fadeInLeft" data-delay=".8s" onClick={this.openModel}>Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
    </div>
    <div className="modelAVC">
   
    
    <div id="myModal" className="modal">
    
      <div className="modal-content">
        <span className="close">&times;</span>
       <div className="detail">Enter Details</div>
        
    
        <div className="group">
          <input type="text" className="inp"></input><span className="bar"></span>
          <label className="labID">Name</label>
        </div>
        <div className="group">
          <input type="email" className="inp"></input><span className="bar"></span>
          <label className="labID">Phone Number</label>
        </div>
        <div className="group">
          <input type="number" className="inp" onChange={this.handleChange}/><span className="bar"></span>
          <label className="labID"> Amount</label>
        </div>
        <div style={{marginTop:'4vh'}}>
        <CardSection />
        <Button className="Buttons" style={{position:'absolute',right:'25vh',bottom:15}} disabled={!this.props.stripe} onClick={this.handleSubmit}>Donate ₹{this.state.DonationAmount}</Button>
        </div>
      </div>
    
    </div>
    </div>
       
      </div>
    );
  }
}
export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutForm  stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}