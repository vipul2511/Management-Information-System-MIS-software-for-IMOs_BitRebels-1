import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import "./verification.css";
import firebase from '../../../firebase SDK/firebase';

import Header from '../../header/Header';
import Footer from '../Footer';
class AdminVerified extends Component {
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
      // let Data=[];
      // Data.push(snap.val());
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
            <th>More Information</th>
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
               <td><Button onClick={this.moreDetails}>More Details</Button></td>
             </tr>
           );
         })}
            
            {/* <td>
              <input
                type="checkbox"
                name="myCheckbox"
                className="inputs"
                value="2"
                onclick={this.selectOnlyThis}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="myCheckbox"
                className="inputs"
                value="3"
                onclick={this.selectOnlyThis}
              />
            </td>
            <td>150000</td>
            <td><Button onClick={this.moreDetails}>More Details</Button></td>
          </tr>
          <tr>
            <td>1583528832</td>
            <td>Varshang</td>
            <td>Rajasthan, Udaipur</td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>100000</td>
            <td><Button>More Details</Button></td>
          </tr>
          <tr>
          <td>1583528832</td>
            <td>Bharat</td>
            <td>Rajasthan, Udaipur</td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>110000</td>
            <td><Button>More Details</Button></td>
          </tr>
          <tr>
          <td>1583528832</td>
            <td>Khushi</td>
            <td>Rajasthan, Udaipur</td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>110000</td>
            <td><Button>More Details</Button></td>
          </tr>
          <tr>
          <td>1583528832</td>
            <td>Ajay</td>
            <td>Rajasthan, Udaipur</td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>110000</td>
            <td><Button>Bank Receipt</Button></td>
          </tr>
          <tr>
          <td>1583528832</td>
            <td>Shobha</td>
            <td>Rajasthan, Udaipur</td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>
              <input type="checkbox" className="inputs"></input>
            </td>
            <td>110000</td>
            <td><Button>More Details</Button></td>
          </tr> */}
        </tbody>
      </Table>
      {/* <button onClick={this.check}>hrllo</button> */}
      </div>
    );
  }
}

export default AdminVerified;
