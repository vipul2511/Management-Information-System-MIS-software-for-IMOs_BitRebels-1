import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.css";
import { Link } from "react-router-dom";
import firebase from "../../firebase SDK/firebase";
const Header = () => {
  const [user, setUser] = useState();

  function login() {
    window.location.href = "/SignIn";
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged((users) => {
      if (users) {
        localStorage.setItem("UserID", users.uid);
        setUser(true);
      }
    });
  });
  function logout() {
    firebase
      .auth()
      .signOut()
      .then((success) => {
        setUser(false);
        window.location.href = "/Home";
      });
  }
  function ApplyLoan() {
    window.location.href = "/ApplyLoan";
  }

  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={require("../Images/download.jfif")}
          alt="logo"
          className="img-logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to="/Home" className="navlink">Home</Link>   
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/application" className="navlink">Repayment Track</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/Gallery" className="navlink">Gallery </Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/DonationPayment" className="navlink">Donation</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <Link to="/blog" className="navlink">Success Stories</Link>
          </Nav.Link>
          {user ? (
            <button
              class="btn btn_order shadow_btn"
              type="submit"
              onClick={ApplyLoan}
            >
              Apply Loan
            </button>
          ) : (
            <button
              className="btn btn1 shadow_btn"
              type="submit"
              onClick={login}
            >
              Log In
            </button>
          )}
          {user ? (
            <button
              className="btn btn1 shadow_btn"
              type="submit"
              onClick={logout}
            >
              Log out
            </button>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
