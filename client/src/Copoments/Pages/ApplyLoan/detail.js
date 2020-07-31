import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "./MainLoan.css";
import firebase from '../../../firebase SDK/firebase';
import Header from '../../header/Header';
import MyDocument from './Invoice';
const initial = {
  Income:"",
  literacyLevel:"", 
  family: "",
  cast: "",
  religion: "",
  familyError: "",
  castError: "",
  religionError: "",
  IncomeError:"",
  literacyError:"",
};
class Details extends Component {
  state = {
    initial,
    firstObj:null,
    secondObj:null,
    thirdObj:null,
    AppID:null,
    AuthID:null
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
    let IncomeError ="";
    let literacyError="";
    let familyError = "";
    let castError = "";
    let religionError = "";
if(!this.state.Income){
  IncomeError="Enter Current Income";
}
if(!this.state.literacyLevel){
  literacyError="Enter literacy Level"
}
    if (!this.state.family) {
      familyError = "Enter Total Member";
    }
    if (!this.state.cast) {
      castError = "Enter Your Cast";
    }
    if (!this.state.religion) {
      religionError = "Enter Your Religion";
    }
    if (familyError || castError || religionError || IncomeError || literacyError) {
      this.setState({ familyError, castError, religionError, IncomeError,literacyError});
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    let perObj;
    perObj={
      CurrentIncome:this.state.Income,
      literacyLevel:this.state.literacyLevel,
      totalFamilyNO:this.state.family,
      cast:this.state.cast,
      religion:this.state.religion,
      AppID:this.state.AppID
    }
    let target= this.state.firstObj;
    let source = this.state.secondObj;
    const returnedTarget = Object.assign(target, source);
    const finalData = Object.assign(returnedTarget, perObj);
    console.log(finalData);
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initial);
      let newData = this.state.newObj
      localStorage.setItem('finalData',JSON.stringify(finalData));
      const Data = firebase.database().ref('users/').child('Application/'+this.state.AuthID).set({finalData}).then(success =>{
        window.location.href="/Final";
      });
      console.log(Data);
      
    }
  };
  componentDidMount(){
    let retrievedObject = localStorage.getItem("hello");
    let stored = JSON.parse(retrievedObject);
    let DataObj= Object.assign({},stored);
    this.setState({firstObj:DataObj});
    console.log(this.state.firstObj);

   let userID= localStorage.getItem('UserID');
   this.setState({AuthID:userID});
    var minm = 100000000;
    var maxm = 999999999;
    let downInnerHTML = Math.floor(Math
        .random() * (maxm - minm + 1)) + minm;
    console.log(downInnerHTML);
    this.setState({AppID:downInnerHTML});

    let retrievedObjects = localStorage.getItem("students");
    let storeds = JSON.parse(retrievedObjects);
    let InfoData= Object.assign({},storeds);
    this.setState({secondObj:InfoData})
    console.log(InfoData);

 localStorage.setItem('Application',JSON.stringify(downInnerHTML));
  }
  render() {
    return (
      <div>
      <Header />
      <Container fluid className="headss">
        <Row>
          <Col md={12}>
            <div className="sec2 sec4">
              <h1>Get Your Loan Report & Score Now</h1>
              <h3 className="h3head">With Loan analysis and monthly updates</h3>
              <hr></hr>
              <div className="error" style={{marginTop:'3vh'}}>{this.state.IncomeError}</div>
              <input
                name="Income"
                type="number"
                className="det"
                placeholder="Current Income Level"
                value={this.state.Income}
                onChange={this.handlechange}
              ></input>
              <div className="error" style={{marginTop:'3vh'}}>{this.state.literacyError}</div>
              <input
                name="literacyLevel"
                type="text"
                className="det"
                placeholder="Literacy Level"
                value={this.state.literacyLevel}
                onChange={this.handlechange}
              ></input>
              <div className="error" style={{marginTop:'3vh'}}>{this.state.familyError}</div>
              <input
                name="family"
                type="number"
                className="det"
                placeholder="Total Member In family"
                value={this.state.family}
                onChange={this.handlechange}
              ></input>
              <div className="error" style={{marginTop:'3vh'}}>{this.state.castError}</div>
              <input
                name="cast"
                type="text"
                className="det"
                placeholder="Enter Your Cast"
                maxLength="10"
                value={this.state.cast}
                onChange={this.handlechange}
              ></input>
                      <div className="error" style={{marginTop:'3vh'}}>{this.state.religionError}</div>
              <input
                name="religion"
                type="text"
                className="det"
                placeholder="Enter Your Religion"
                maxLength="12"
                value={this.state.religion}
                onChange={this.handlechange}
              ></input>
              <br/>
              <Button
                type="button"
                className="btn btnClass"
                onClick={this.handleSubmit}
              >
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

export default Details;
