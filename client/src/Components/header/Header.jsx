import React,{useState,useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import {Link} from "react-router-dom";
import firebase from '../../firebase SDK/firebase';
 const Header = () => {

  const [user,setUser]=useState();

   function login(){
    window.location.href="/SignIn"
   }
   useEffect(()=>{
    firebase.auth().onAuthStateChanged((users)=>{
      if(users){
        localStorage.setItem('UserID',users.uid);
        setUser(true);
      }
    })
   })
   function logout(){
    firebase.auth().signOut().then(success=>{
      setUser(false);
      window.location.href="/Home"
    });
   }
   function ApplyLoan(){
     window.location.href="/ApplyLoan"
   }
   
    return (
     <div  >
    <Navbar className="stickys"    bg="white" variant="light">
    <Navbar.Brand href="#home"><img src={require('../Images/download.jfif')} alt="logo" className="img-logo"/></Navbar.Brand>
    <Nav className="ml-auto">
    <div className="topnav ">
  <Link to="/Home">Home</Link>
  <Link to="/application">Repayment Track</Link>
  <Link to="/Gallery">Gallery </Link>
  <Link to="/DonationPayment">Donation</Link>
  <Link to="/blog">Success Stories</Link>
{user ?  <button class="btn btn_ordered shadow_btn" type="submit" onClick={ApplyLoan}>Apply Loan</button>:<button className="btn btn1 shadow_btn" type="submit" onClick={login}>Log In</button>}
  {user?
    <button className="btn btn1 shadow_btn" type="submit" onClick={logout}>Log out</button>:null
  }
  
</div>
    </Nav> 
  </Navbar>
  </div>

    )
}
export default Header;
