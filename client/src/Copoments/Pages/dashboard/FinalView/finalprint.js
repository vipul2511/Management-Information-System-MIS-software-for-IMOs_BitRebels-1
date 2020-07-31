import React, { Component } from "react";
import "./finalprint.css";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import Modal from "../Admin Verify/modal";
import Button from "react-bootstrap/Button";
import firebase from '../../../../firebase SDK/firebase';
import "../Admin Verify/table.css";
let userID;
class FinalView extends Component {
    constructor(props){
        super(props);
        this.state={
         firstForm:null,
         Application:null,
         Empo:null,
         AadhaarCard:null,
         Account:null,
         Name:null,
         CurrentIncome:null,
         Email:null,
         PANCard:null,
         cast:null,
         phone:null,
         literacyLevel:null,
         religion:null,
         totalFamilyNO:null,
         Gender:null,
         amount:null,
         Address:null,
         AuthID:null,
         to:null,
         message:null
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
   console.log(userID);
        window.html2canvas = html2canvas;
        let retrievedObject = localStorage.getItem("finalData");
    let stored = JSON.parse(retrievedObject);
    let DataObj= Object.assign({},stored);
    this.setState({firstForm:DataObj});
    console.log(DataObj);
    this.setState({Application:DataObj.AppID,Empo:DataObj.EmploymentType,AadhaarCard:DataObj.AadhaarCard,Account:DataObj.Account,Name:DataObj.Name})
     this.setState({CurrentIncome:DataObj.CurrentIncome,Email:DataObj.Email,PANCard:DataObj.PANCard,cast:DataObj.cast,phone:DataObj.Phone,Address:DataObj.Address});
     this.setState({literacyLevel:DataObj.literacyLevel,religion:DataObj.religion,totalFamilyNO:DataObj.totalFamilyNO,Gender:DataObj.Gender,amount:DataObj.Amount});
setTimeout(this.htmltopdf,1000);
    }
    approve=()=>{
        window.location.href="/EMI"
    }
    handleChange=(event)=>{
this.setState({message: event.target.value})
;
    }
    onSubmit=()=> {
        console.log(this.state.message)
        let messaged={
            to:'+91'+this.state.phone,
            body:this.state.message
        }
        fetch('/api/sms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(messaged)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                 to:'',
                 message:''
              });
              window.location.href="/Repay";
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
      }
      showModel=()=>{
        firebase.storage()
        .ref("BankReceipt/")
        .child(this.state.phone)
        .getDownloadURL()
        .then(url => {
          this.setState({ url });
        });
      }
 openModel=()=>{
    var btn = document.getElementById("myBtn");
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    
    
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
  render() {
    return (
        <div>
        <div className="main_loan" id="loanPDF">
        <div style={{marginTop:'2vw',marginLeft:'4rem'}}>
        <img src={require('./user.jpeg')} className="loanDetailsLogo" alt="logo Details" />
        <div className="loanHead">
        <b style={{fontSize:'25px',left:650,position:'absolute'}}> Loan Details</b>
        {/* <button className="btn prt_btn" onClick={this.abdhdID}>PRINT</button>  */}
        <div style={{float:'right',padding:12}}>
        <Button variant="success" className="dropbutton" onClick={this.approve}>Approve</Button>{" "}
        <Button
        variant="primary"
        id="myBtn"
        style={{
          width: "23vh",
          backgroundColor: "skyblue",
          borderColor: "skyblue",
          fontSize:17.5,
        }}
        className="pend"
        onClick={this.openModel}
      >
        Pending
      </Button>
     <Button variant="danger" style={{marginLeft:10,marginRight:20}} className="dropbutton2">Reject</Button>
   </div>
     </div>
     <div>
     <div className="modelAVC">
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
       <div className="detail">Reason/Feedback</div>
       <div>
        <div className="group">
          <textarea type="text" className="inp" onChange={this.handleChange} /><span className="bar"></span>
          </div>
        </div>
        <button type="button" style={{marginTop:'10vh'}} class="buttonsss buttonBlue" onClick={this.onSubmit}>Submit
        </button>
      </div>
    </div>
    </div>
    </div>
    <div className="modelAVC">
    <div id="myModalID" className="modal">
      <div className="modal-content-id">
        <span className="closed close">&times;</span>
       <div>
        <div className="group">
          </div>
        </div>
      </div>
    </div>
    </div>
     </div>
     </div>
          <table border="1" style={{marginBottom:50}} className="tableID">
          <tbody>
              <tr>
                 <td>
                  <b>Application Number</b>
                 </td>
                 <td><h6>{this.state.Application}</h6></td>
                 <td>
                     <b>Employment Type</b>
                 </td>
                 <td><h6>{this.state.Empo}</h6></td>
              </tr>
              <tr>
                  <td><b>Name</b></td>
                  <td colSpan="3"><h6>{this.state.Name}</h6></td>
              </tr>
              <tr>
                 <td><b>Email-ID </b></td>
                 <td><h6>{this.state.Email}</h6></td>
                 <td><b>Loan Amount</b></td>
                 <td><h6>{this.state.amount}</h6></td>
             </tr>
              <tr>
                 <td>
                  <b>Mobile Number</b>
                 </td>
                 <td><h6>{this.state.phone}</h6></td>
                 <td>
                     <b>Gender</b>
                 </td>
                 <td><h6>{this.state.Gender}</h6></td>
              </tr>
               <tr>
                   <td><b>Address</b></td>
                   <td colSpan="3"><h6>{this.state.Address}</h6></td>
               </tr>
              <tr>
                 <td>
                  <b>Caste</b>
                 </td>
                 <td><h6>{this.state.cast}</h6></td>
                 <td>
                     <b>Religion</b>
                 </td>
                 <td><h6>{this.state.religion}</h6></td>
                </tr>
              <tr>
                 <td>
                  <b>Literacy Level</b>
                 </td>
                 <td><h6>{this.state.literacyLevel}</h6></td>
                 <td>
                     <b>Total Member In Family</b>
                 </td>
                 <td><h6>{this.state.totalFamilyNO}</h6></td>
                 </tr>
                 <tr>
                     <td><b>Current Income Level</b></td>
                     <td colSpan="3"><h6>{this.state.CurrentIncome}</h6></td>
                 </tr>
             
              <tr>
                  <td><b>Account Number</b></td>
                  <td><h6>{this.state.Account}</h6></td>
                  <td><b>Pan Card Number</b></td>
                  <td><h6>{this.state.PANCard}</h6></td>
              </tr>
              <tr>
                  <td><b>Aadhar Card Number</b></td>
                  <td><h6>{this.state.AadhaarCard}</h6></td>
                  <td><b>Document</b></td>
                  <td><Button id="openModel" className="btn" onClick={this.showModel}>View Document</Button></td>
              </tr>
 
              </tbody>

          </table>
          </div>
    );
  }
}

export default FinalView;
