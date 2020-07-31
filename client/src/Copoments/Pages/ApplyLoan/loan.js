import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "./MainLoan.css";
import { Validator } from 'format-utils';
import firebase from '../../../firebase SDK/firebase';
import Header from '../../header/Header';
import Home from './home';
const initial = {
  account: "",
  pancard: "",
  amount:"",
  aadhaar: "",
  accountError: "",
  pancardError: "",
  aadhaarError: "",
  stateError:"",
  amountError:"",
  StaName:""
};
class Loan extends Component {
  state ={
  initial,
  noFile:'No file chosen',
  imageName:null
  };
  handlechange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let accountError = "";
    let pancardError = "";
    let aadhaarError = "";
    let amountError ="";
    let stateError="";

    if (!this.state.account) {
      accountError = "Enter Account Number";
    }
    if (!this.state.pancard) {
      pancardError = "Enter Pancard Details";
    }
    if (!this.state.aadhaar) {
      aadhaarError = "Enter Aadhaar Number";
    }
    if (!this.state.amount) {
      amountError = "Enter loan Amount";
    }
    if (!this.state.StaName) {
      stateError = "Enter State Name";
    }

    if ( accountError || pancardError || aadhaarError || amountError || stateError ) {
      this.setState({ accountError, pancardError, aadhaarError,amountError,stateError});
      return false;
    }
    return true;
  };

  imageUpload = e =>{
    if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
        this.setState({imageName:image.name})
      }  
 }
 newItemsData =()=>{ 
  const {image} = this.state;
  let phone = localStorage.getItem("phone");
  let phoneID= JSON.parse(phone);
   if(image != null){
    const uploadTask = firebase.storage().ref().child('BankReceipt/'+phoneID).put(image);
    console.log(uploadTask)
    setTimeout(this.handleSubmit,1000); 
   }else{
     alert("Please choose Bank Receipt and Try again");
   }
  
 }
  handleSubmit = (event) => {
    let objects;
    objects={
     Account:this.state.account,
     PANCard:this.state.pancard,
     Amount:this.state.amount,
     AadhaarCard:this.state.aadhaar,
     stateName:this.state.StaName
     
    }
    const isValid = this.validate();
    if (isValid) {
      if(Validator.aadhaar(this.state.aadhaar)){
        if(Validator.pan(this.state.pancard)){
          console.log(this.state);
          this.setState(initial);
          localStorage.setItem("hello",JSON.stringify(objects));
          window.location.href="http://localhost:3000/Details"
        }else{
          alert("Please enter correct Pan Card number");
        }
      }else{
        alert("Please enter correct aadhaar number");
      }
    }
  };
  render() {
    return (
      <div className="loanTp">
      <Header />
      <Container fluid style={{height:'110vh',backgroundColor:'rgb(242, 246, 250)'}} >
        <Row>
          <Col md={12}>
            <div className="sec2">
              <h1>Get Your Loan Report & Score Now</h1>
              <h3 className="h3head">With Loan analysis and monthly updates</h3>
              <hr></hr>
              <div className="error" style={{marginTop:'3vh'}}>{this.state.accountError}</div>
              <input
                name="account"
                type="text"
                className="det"
                placeholder="Enter Account Number"
                value={this.state.account}
                onChange={this.handlechange}
              ></input>
              <div className="error" style={{marginTop:'3vh'}}>{this.state.stateError}</div>
              <input
                name="StaName"
                type="text"
                className="det"
                placeholder="Enter Your State"
                value={this.state.StaName}
                onChange={this.handlechange}
              ></input>
    <div className="error" style={{marginTop:'3vh'}}>{this.state.pancardError}</div>
              <input
                name="pancard"
                type="text"
                className="det"
                placeholder="Enter Pan Card Number"
                maxLength="10"
                value={this.state.pancard}
                onChange={this.handlechange}
              ></input>
                  <div className="error" style={{marginTop:'3vh'}}>{this.state.aadhaarError}</div>
              <input
                name="aadhaar"
                type="text"
                className="det"
                placeholder="Enter Aadhaar Number"
                maxLength="12"
                value={this.state.aadhaar}
                onChange={this.handlechange}
              ></input>
             <div className="error" style={{marginTop:'3vh'}}>{this.state.amountError}</div>
              <input
                name="amount"
                type="text"
                className="det"
                placeholder="Enter loan Amount"
                maxLength="12"
                value={this.state.amount}
                onChange={this.handlechange}
              ></input>
              <br/>
              <div style={{marginLeft:'17rem',marginTop:'4vh'}}>
              <div className="file-upload">
  <div className="file-select">
    <div className="file-select-button" id="fileName">Upload Bank Statement</div>
    <div className="file-select-name" id="noFile">{this.state.imageName||"No file Chosen"}</div> 
    <input type="file" name="chooseFile" className="input-file" onChange={this.imageUpload} id="chooseFile" />
  </div>
  </div>
              </div>
           
              <p style={{color:'black',textAlign:'center',paddingTop:'10px', fontSize:'14px'}}>* Upload an Image of Bank statement of last 3 month</p>
            
              <Button type="submit" className="btn btnClass" onClick={this.newItemsData}>
                Submit
              </Button>
              
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Loan;
