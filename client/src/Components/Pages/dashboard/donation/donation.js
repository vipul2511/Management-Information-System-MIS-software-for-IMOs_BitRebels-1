import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./donation.css";
import Basics from '../../Payment/Basicpayment';
import DonationPayment from './Basicpayment';
class Donation extends Component{
  sub(){
    window.location.href="/Payment"
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
render() {
    return(
        <div>
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
          <input type="email"className="inp"></input><span className="bar"></span>
          <label className="labID">Phone Number</label>
        </div>
        <div className="group">
          <input type="email"className="inp"/><span className="bar"></span>
          <label className="labID"> Amount</label>
        </div>
        <div style={{position:'absolute',right:'2vh',top:330}}>
        <Basics />
        </div>
      
      </div>
    
    </div>
    </div>
    </div>
    );
  }
}

export default Donation;
