import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "./modal";
import Dropdown from "react-bootstrap/Dropdown";
import "./table.css";
class PersonDetails extends Component {
  render() {
    return (
      <div
        className="thome"
        style={{ backgroundColor: "white", height: "100vh" }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Name</th>
              <th>State</th>
              <th>PAN Card</th>
              <th>Phone Number</th>
              <th>Aadhar Number</th>
              <th>Account Number</th>
              <th>Address</th>
              <th>Loan Amount</th>
              <th>Date of submit</th>
              <th>Document</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1583528832</td>
              <td>Mukul</td>
              <td>Rajasthan, Udaipur</td>
              <td>34568998765</td>
              <td>34568998765</td>
              <td>34568998765</td>
              <td>94568998765</td>
              <td>sai villa shrimali colony badgaon Udaipur</td>
              <td>150000</td>
              <td>25/7/2020</td>
              <td>
                <Button>Bank Receipt</Button>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Loan Status
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Button variant="success" className="dropbutton" >Approve</Button>{" "}
                    <Modal />
                    <Button variant="danger" className="dropbutton2">Reject</Button>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>1583528832</td>
              <td>Varshang</td>
              <td>Rajasthan, Udaipur</td>
              <td>34568998765</td>
              <td>34568998765</td>
              <td>34568998765</td>
              <td>94568998765</td>
              <td>Sector 12</td>
              <td>100000</td>
              <td>25/7/2020</td>
              <td>
                <Button>Bank Receipt</Button>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Loan Status
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Button variant="success" className="dropbutton" >Approve</Button>{" "}
                    <Modal />
                    <Button variant="danger" className="dropbutton2">Reject</Button>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>1583528832</td>
              <td>Bharat</td>
              <td>Rajasthan, Udaipur</td>
              <td>34568998765</td>
              <td>34568998765</td>
              <td>34568998765</td>
              <td>94568998765</td>
              <td>Sector 12</td>
              <td>110000</td>
              <td>25/7/2020</td>
              <td>
                <Button>Bank Receipt</Button>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Loan Status
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Button variant="success" className="dropbutton" >Approve</Button>{" "}
                    <Modal />
                    <Button variant="danger" className="dropbutton2">Reject</Button>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PersonDetails;
