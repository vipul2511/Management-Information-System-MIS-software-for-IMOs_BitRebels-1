import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import "./LastQuarterVerification.css";
import firebase from '../../../firebase SDK/firebase';

import Header from '../../header/Header';
import Footer from '../Footer';
class LastQuarterVerification extends Component {
  constructor(props){
    super(props);
   this.state={
      userData:[]
    }
  }
   
  componentDidMount(){
    firebase.database().ref('users/Application/').once("value",function(snapshot){
      let Data=[];
      snapshot.forEach(function(snapshot1) {
        console.log(snapshot1.val()); 
        Data.push(snapshot1.val());
    });
     
      this.setState({userData:Data});
    }.bind(this));
    
    console.log(this.state.userData);
  }

  check=()=>{
    console.log(this.state.userData);
  }
   selectOnlyThis=(id)=> {
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });
    id.checked = true;
  }
   moreDetails=()=>{
    window.location.href="/FinalView"
  }
  render() {
    return(
      <div>
    <Table striped bordered hover className="Tables_style">
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Name</th>
            <th>State</th>
            <th>Aadhaar No.</th>
            <th>PANCard No.</th>
            <th>Account No.</th>
            <th>Loan Amount</th>
            <th>Sale Report</th>
          </tr>
        </thead>
        <tbody>

         {this.state.userData.map((item,i)=>{
           return(
             <tr key={i} style={{width:'100px',height:'100px'}}>
               <td>{item.finalData.AppID}</td>
               <td>{item.finalData.Name}</td>
               <td>{item.finalData.stateName}</td>
               <td>{item.finalData.AadhaarCard}</td>
               <td>{item.finalData.PANCard}</td>
               <td>{item.finalData.Account}</td>
               <td>{item.finalData.Amount}</td>
               <td></td>
             </tr>
           );
         })}
         <tr  style={{width:'100px',height:'100px'}}>
          <td>47512481</td>
          <td>Varshang Shrimali</td>
          <td>Rajasthan</td>
          <td>568952978158</td>
          <td>BISPS3073A</td>
          <td>555555555555</td>
          <td>784596123</td>
          <td style={{color:'green'}}>Approved</td>
         </tr>
         <tr style={{width:'100px',height:'100px'}}>
         <td>47512481</td>
          <td>Bharat shrotriya</td>
          <td>Rajasthan</td>
          <td>595432485949	PISBN5541S</td>
          <td>PISBN5541S</td>
          <td>68768768768733</td>
          <td>3333</td>
          <td style={{color:'green'}}>Approved</td>
         </tr>
         <tr style={{width:'100px',height:'100px'}}>
         <td>227264758</td>
          <td>	Varshang Shrimali</td>
          <td>Tamil Nadu</td>
          <td>PISBN2214S</td>
          <td>PISBN5541S</td>
          <td>	224512111</td>
          <td>250000</td>
          <td style={{color:'green'}}>Approved</td>
         </tr>
         <tr style={{width:'100px',height:'100px'}}>
         <td>826312030			254210000	250000</td>
          <td>	Varshang Shrimali</td>
          <td>Rajasthan</td>
          <td>PISBN2214S</td>
          <td>	269191509702</td>
          <td>	224512111</td>
          <td>250000</td>
          <td style={{color:'Yellow'}}>Pending</td>
         </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default LastQuarterVerification;
