import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Img from './download.png'
import { Container, Row,Col } from "react-bootstrap";
import "./MainLoan.css";
import firebase from '../../../firebase SDK/firebase';
import Header from '../../header/Header';
import { FaEye } from 'react-icons/fa'
import { Validator } from 'format-utils';
const initial = {
  name: "",
  email: "",
  number: "",
  address: "",
 gender:"",
 passwords:"",
  nameError: "",
  emailError: "",
  numberError: "",
  addressError: "" ,
  passwordsError:"",
};

let colors = ['orange', 'red', 'blue', 'purple'];
class App extends Component {
  state = {
    initial,
    items:null,
    Locations:false,
    passwords:"",
    confirmPasswords:"",
    selectedOption:null,
    progress:'',
    url:'',
    image:null,
    file:null
  };
  // onhandleChange=({target})=>{
  //   this.setState({ [target.name]:target.value});
  //    }
  handlechange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let numberError = "";
    let addressError = "";
    let passwordsError ="";

    if (!this.state.name) {
      nameError = "Name Cannot Be Blank";
    }
    if(this.state.email){
    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }
  }else{
    emailError="Invalid Email"
  }
    if (!this.state.number) {
      numberError = "Number Cannot Be Blank";
    }
    if (!this.state.address) {
      addressError = "Address Cannot Be Blank";
    }
    if(this.state.passwords ==""){
      passwordsError="Password Cannot Be Blank";
    }
  
    if (emailError || nameError || numberError || addressError || passwordsError) {
      this.setState({ emailError, nameError, numberError, addressError,passwordsError });
      return false;
    }
    return true;
  };
  imageUpload = e =>{
    let image;
    let fileTyped;
    if (e.target.files[0]) {
        image = e.target.files[0];
         fileTyped= URL.createObjectURL(e.target.files[0]);
        this.setState(() => ({ image }));
        this.setState({file:fileTyped});
      }  
 }
 newItemsData =()=>{ 
  const {image} = this.state;
  console.log(this.state.items)
   if(image != null){
     if(this.state.items!="Employment Type" && this.state.items!=null){
       if(Validator.mobile(this.state.number)){
      const uploadTask = firebase.storage().ref().child('UserPic/'+image.name).put(image);
      console.log(uploadTask)
      setTimeout(this.handleSubmit,1000);
       }else{
         alert("Please enter correct Phone number");
       }
     }else{
       alert("Please choose appropriate employment type");
     }
   }else{
     alert("Please Choose Profile Picture and Try again");
   }
 }
  handleChanged = (event) => {
    this.setState({
        items: event.target.value
    });
}
  handleOptionChange=(changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  handleSubmit = (event) => {
    let obj;
    obj={
     Name:this.state.name,
     Email:this.state.email,
     Phone:this.state.number,
     Address:this.state.address,
     EmploymentType:this.state.items,
     Gender:this.state.selectedOption,
     Password:this.state.passwords,
     confirmPassword:this.state.confirmPasswords
    }
    // event.preventDefault();
    const isValid = this.validate();
    console.log(this.state.items);
      if(this.state.passwords===this.state.confirmPasswords){
        if (isValid) { 
          this.setState(initial);
          console.log(this.state);
          localStorage.setItem("phone",JSON.stringify(this.state.number));
          localStorage.setItem("students",JSON.stringify(obj));
          window.location.href="http://localhost:3000/Loan"
        }
      }else{
        alert("Please Enter the correct Password");
      }
  };
  getData =()=>{
    // let retrievedObject = localStorage.getItem("students");
    // let stored = JSON.parse(retrievedObject);
    // console.log(stored);
    console.log(this.state.items);
  }

  render() {
    return (
      <div>
      <Header  />
      <div className="fullBox">
      <Container fluid className="headss top_mar">
        <Row className="col">
            <div className="sec">
              <h1>Get Your Loan Report & Score Now</h1>
              <h3 className="h3head">With Loan analysis and monthly updates</h3>
              <hr></hr>
            <div style={{position:'absolute',marginLeft:'95vh'}}>
            <img src= {this.state.file||Img} alt="pic" className="Cont" style={{width:"140px",height:"150px" }}/>
            <div className="upload-btn-wrapper">
            {/* <button className="btnID">Upload a file</button> */}
            <input type="file" className="input-fileData" onChange={this.imageUpload} name="myfile" />
            </div>
            </div>
              <div >
              <select className="det drop" value={this.state.items} defaultValue="Employment Type" onChange={this.handleChanged}>
              <option value="Employment Type">Employment Type</option>
            <option value="Self Employed" >Self Employed</option>
            <option value="Unemployed" >Unemployed</option>
            <option value="Job" >Job</option>
            <option value="Farmer" >Farmer</option>
          </select>
          </div>
              <input
                type="text"
                name="name"
                className="det"
                placeholder="Enter Your Name"
                value={this.state.name}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.nameError}</div>
              <input
                type="text"
                name="email"
                className="det"
                placeholder="Enter Your Email"
                value={this.state.email}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.emailError}</div>
              <b className="optionhead">Gender :</b>
              <span className="genderbtn">
              <label className="option" for="gender1">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={this.state.selectedOption ==='Male'}
                  onChange={this.handleOptionChange}
                  className="gender"
                ></input>
                  Male
                </label>
              </span>
              <span className="genderbtn2">
                <input type="radio" name="gender" value="Female" checked={this.state.selectedOption =='Female'}
                onChange={this.handleOptionChange}
                 className="gender"></input>
                <span className="option">Female</span>
              </span>
              <br></br>
              <input
                type="text"
                name="number"
                className="det"
                placeholder="Enter Your Phone Number"
                maxLength={10}
                value={this.state.number}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.numberError}</div>
              <textarea
                type="text"
                name="address"
                className="det addss"
                placeholder="Enter Your Address"
                value={this.state.address}
                onChange={this.handlechange}
              ></textarea>
              <div className="error">{this.state.addressError}</div>
              <div className="input-icons">
              <FaEye size={20} className="icon" />
              
              <input
              
              type="password"
                placeholder="Password"
                name="passwords"
                onChange={this.handlechange}
                value={this.state.passwords}
                className="det"
                
              >
              </input>
               </div>
              <div className="error">{this.state.passwordsError}</div>
              <div className="input-icons">
              <FaEye size={20} className="icon" />
              
              <input
                type="password"
                security={true}
                className="det"
                value={this.state.confirmPasswords}
                name="confirmPasswords"
                onChange={this.handlechange}
                placeholder="Confirm Password"
              ></input>
             </div>
             
              <br></br>
                <Button
                  type="submit"
                  className="Button"
                  onClick={this.newItemsData}
                >
                  Submit
                </Button>
        
              
            </div>
        </Row>
      </Container>
      </div>
      </div>
    );
  }
}

export default App;
