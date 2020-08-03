import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import "./verification.css";
import firebase from '../../../../firebase SDK/firebase';

class MonthlyReport extends Component {
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
            <th>Status</th>
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
               <td style={{color:'green'}}>Approved</td>
             </tr>
           );
         })}
         <tr style={{width:'100px',height:'100px'}}>
               <td>45421</td>
               <td>Vipul Shrimali</td>
               <td>Delhi</td>
               <td>3445678910</td>
               <td>PIBS3210S</td>
               <td>245178452</td>
               <td>40000</td>
               <td style={{color:'Yellow'}}>Pending</td>
             </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default MonthlyReport;
