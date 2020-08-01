import React, { Component } from "react";
import "./finalprint.css";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import firebase from '../../../firebase SDK/firebase';
let userID;
class FinalPrint extends Component {
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
         stateName:null

        }
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
     this.setState({CurrentIncome:DataObj.CurrentIncome,stateName:DataObj.stateName,Email:DataObj.Email,PANCard:DataObj.PANCard,cast:DataObj.cast,phone:DataObj.Phone,Address:DataObj.Address});
     this.setState({literacyLevel:DataObj.literacyLevel,religion:DataObj.religion,totalFamilyNO:DataObj.totalFamilyNO,Gender:DataObj.Gender,amount:DataObj.Amount});
setTimeout(this.htmltopdf,1000);
    }
    abdhdID=()=>{     
        window.print();
    }
    backBtn=()=>{
        window.location.href="/Home"
    }
htmltopdf(){
    userID = localStorage.getItem('UserID');
    let data=document.getElementById("loanPDF");
    var doc = new jsPDF('p','pt',[2000,2000]);
   doc.html(data,
   {
       callback:function(){
        // window.open(doc.output('bloburl'));
        let linkData=doc.output("blob");
        let filePath = Date.now().toString();
        // let pdfData=new FormData();
        // pdfData.append("data",linkData);
        // let printPDF=doc.save('Application.pdf')
        firebase.storage().ref('PDF/').child('Application/'+userID).put(linkData, {contentType:'application/pdf'}).then(function(snap){
            console.log("Uploaded ");
        });
       }
   });
}
  render() {
    return (
        <div>
        <div className="main_loan" id="loanPDF">
        <div style={{marginTop:'2vw',marginLeft:'4rem'}}>
        <img src={require('../../Images/download.jfif')} className="loanDetailsLogo" alt="logo Details" />
        <div className="loanHead">
        <b style={{fontSize:'25px'}}> Loan Details</b>
        <button className="btn prt_btn" onClick={this.abdhdID}>PRINT</button> 
     </div>
     
     </div>
          <table border="1" className="tableID">
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
                 <td><b>State</b></td>
                 <td><h6>{this.state.stateName}</h6></td>
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
                  <td><b>Loan Amount</b></td>
                  <td><h6>{this.state.amount}</h6></td>
              </tr>
              <tr>
                  <td><b>Aadhar Card Number</b></td>
                  <td><h6>{this.state.AadhaarCard}</h6></td>
                  <td><b>Pan Card Number</b></td>
                  <td><h6>{this.state.PANCard}</h6></td>
              </tr>
 
              </tbody>

          </table>
          </div>
          <div className="backCont">
          <button className="btn backBtn" onClick={this.backBtn}> Back to home</button>
          </div>
          </div>
    );
  }
}

export default FinalPrint;
