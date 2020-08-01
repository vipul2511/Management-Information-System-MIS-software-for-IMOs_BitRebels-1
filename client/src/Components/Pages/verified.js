import React from 'react';
import './verified.css';
import {Container,Col,Row} from 'react-bootstrap';
import { FaFileAlt,FaQuestionCircle } from 'react-icons/fa'
function Verified() {
    return(
        <div className="back">
           
           
           <center>
          
           
             <div className="Container" >

                <div className="row rbody">
               
                   <div className="column cols" style={{width: "70%"}}>
                     <h5 className="left">User Address</h5> 
                     <h6 className="left">Bharat Shrotriya</h6> 
                     <p className="left">Mahalakshmi nagar aaramachine badgoan udaipur,
                       Badgoan UDAIPUR-313001,Rajasthan</p> 
                       <h6 className="left">Phone number  : 9166954281</h6>
                   </div>

                   <div className="column cols" className="left" style={{width: "15%"}}>
                     <br></br>
                     <h5>More actions</h5>
                     <br></br>
                   
                   
                     <div style={{color: "orange"}}>
                   <FaFileAlt   size={32}  />  Download Invoice
                    </div>
                  
                    
                   </div>

                   <div className="column cols" className="left" style={{width: "15%"}}>
                   <button class="btn btns"> <b>Download</b></button>
                   </div>
          
            </div>



                <div className="row Rbody">

                <div className="column cols" style={{width: "8%"}}>
                    <img src={require('../Images/loaan.jfif')} style={{width: "65px"}}  className="img" />
                    </div>

                 <div className="column " style={{width: "20%"}}>
                   <h6 className="text">Application ID: 246647</h6>
                    <p className="text colo">Date: 24-05-2020</p> 
                    <p className="text colo">State: Rajasthan</p> 
                    <p className="text"><b> &#x20B9;25,000 </b> <i className="icon ">
                   <FaQuestionCircle size={20}  />
                    </i></p> 

                     </div>
               <div className="column cols" style={{width: "14%"}}>
                 <h5  className="text cor">Approval</h5>
                
                 <input type="checkbox" className="le" name="vehicle3" value="Boat"/>
               </div>

             <div className="column cols " style={{width: "14%"}}>
              <h5  className="text corl">Pending</h5>
                
                 <input type="checkbox" className="le" name="vehicle3" value="Boat"/>
              </div>

           <div className="column cols" style={{width: "14%"}}>
              <h5  className="text corlo">Reject</h5>
                
                 <input type="checkbox" className="le" name="vehicle3" value="Boat"/>
              </div>






            <div className="column " className="left" style={{width: "30%"}}>
            <br></br>
            <h5>Returned</h5>
            <br></br>
                    <div style={{color: "dodgerblue"}}>
                   <FaQuestionCircle  size={23}  /> {'  '} NEED HELP?                                        
                    </div>
                        
           </div>


                </div>


            </div>
          </center> 

        </div>
    );
}
export default Verified;