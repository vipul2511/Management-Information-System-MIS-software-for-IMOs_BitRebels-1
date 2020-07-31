import React from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import Button from "react-bootstrap/Button";
import CardSection from './CardSection';
import './CheckoutForm.css';
import { Container, Row, Col } from "react-bootstrap";
import "./payment.css";
import CardImg from "./card.svg";
import firebase from '../../../firebase SDK/firebase';


class Checkout extends React.Component {
   constructor(props){
     super(props);
    this.state={
      ClientKey:null,
      EMIRate:null,
      orderKey:null,
      userID:null
    }
   }
   componentDidMount(){
    let monthly_rate;
    let userID= localStorage.getItem('UserID');
    this.setState({userID:userID});
    console.log(userID);
    let EMI_Rate=firebase.database().ref('users/EMI/'+userID);
    EMI_Rate.limitToFirst(1).once("child_added",function(data){
      monthly_rate=data.val().scheduled_payment;
      let orderkey= data.key;
      console.log(monthly_rate);
      console.log(orderkey);
      this.setState({EMIRate:monthly_rate});
      this.setState({orderKey:orderkey});
    }.bind(this));
    
    console.log(this.state.EMIRate);
  }
  handleSubmit = async (event) => {
    let Amount;
    Amount=parseFloat(this.state.EMIRate.replace(/,/g, ''))
console.log(Amount);
    event.preventDefault();
    let userID;
    userID=this.state.userID;
    let key;
    key= this.state.orderKey

    const {stripe, elements} = this.props
console.log(this.props);
    if (!stripe || !elements) {
      return;
    }
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
      stripeTokenHandler(result);
      console.log(result);
     async function stripeTokenHandler (token) {
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
          firebase.database().ref('users/EMI/'+userID).child(key).remove().then(succ=>{
            window.location.href="/Home"
          });
          
        }
      })
          console.log(confirmCardPayment);
            })   
          });
       
      }
    }
  };
  render() {
    return (
      <div >
      <Container fluid className="cont">
        <Row>
          <Col md={12}>
            <img src={CardImg} alt="payment" className="payimg" />
            <img
              className="usicon"
              src="https://img.icons8.com/cotton/50/000000/user-male--v4.png"
            />
            <img
              className="appicon"
              src="https://img.icons8.com/ios/50/000000/note.png"
            />
            <img
              className="phicon"
              src="https://img.icons8.com/ios/50/000000/phone.png"
            />
            <img className="wallet" src="https://img.icons8.com/ios/50/000000/wallet.png" />
            <div className="paymentCard">
            <CardSection />
        <Button className="Buttons" style={{position:'absolute',right:'25vh',top:'10vh'}} disabled={!this.props.stripe} onClick={this.handleSubmit}>Pay {this.state.EMIRate}</Button>
     
            </div>
            <div className="cont1">
            <div className="cont2">
            <h2 className="payhead">EMI Payment</h2>
              <input className="entry" type="text" placeholder="Name" />
              <input
                className="entry"
                type="text"
                placeholder="Application ID"
              />
              <input className="entry" type="text" placeholder="Phone no." />
              <input className="entry" type="text" placeholder="EMI Monthly Amount" value={this.state.EMIRate} readOnly />
            </div>
           </div>
          </Col>
        
        </Row>
       
      </Container>
 </div>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <Checkout  stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}