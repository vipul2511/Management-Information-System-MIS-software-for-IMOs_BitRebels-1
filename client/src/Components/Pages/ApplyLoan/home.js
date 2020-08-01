import React from 'react';
import './home.css';
import {Container,Col,Row} from 'react-bootstrap';




function Home() {
 
    return(
        <div className="back">
  
  <div className="file-upload">
  <div className="file-select">
    <div className="file-select-button" id="fileName">Upload Bank Statement</div>
    <div className="file-select-name" id="noFile">No file chosen...</div> 
    <input type="file" name="chooseFile" className="input-file" id="chooseFile" />
  </div>
  </div>
  
        </div>
       
        
    );
    
}
export default Home;