import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Stepper from "./stepper";
import "./Status.css";
import firebase from '../../../firebase SDK/firebase';
class Status extends Component {
  state={
    blobUrl:''
  }

  componentDidMount(){
    let userID = localStorage.getItem('UserID');
    firebase.storage().ref('PDF/Application/'+userID).getDownloadURL().then(url=>{
      this.setState({blobUrl:url});
      console.log(this.state.blobUrl);
    });
    // doc.save('blob:http://localhost:3000/0c1aa937-d4da-4375-a59d-fa58b162018e')
  }
  down=()=>{
window.open(this.state.blobUrl);
  }
  render() {
    return (
      <Container fluid className="WERT">
        <Row>
          <Col md={12}>
            <div className="box1">
              <b className="text">Mukul Mehra</b>
              <p className="text">
                Savina Shiv Society House no.7 Udaipur, Rajasthan Udaipur -
                313001
              </p>
              <b className="text">Phone Number:</b>
              <text className="no">8029839028</text>
              <br />
              <br />
              <b className="text" >Loan Amount:</b>
              <text className="no">30000</text>
              <b className="sidetext">More actions</b>
              <img
                className="iconID"
                src="https://img.icons8.com/color/48/000000/note.png"
              />
              <text className="sidetext1">Download invoice</text>
             <Button className="but" variant="outline-primary" onClick={this.down}>
                Download
              </Button>
            </div>
            <div className="box2">
              <b className="text2">Loan status</b>
              <Stepper />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Status;
