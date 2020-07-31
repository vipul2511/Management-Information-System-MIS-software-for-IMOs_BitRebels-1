import React from 'react';
import './Card.scss';
import MainScreen from './MainScreen';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Card() {
    const mystyle = {
        width: "30vh",
        height: "6vh",
        position: "absolute",
        left: "42%",
        top: "90%",
        fontWeight: "bold"
      };
    return ( 
    <div className="card">
    <MainScreen />
    <Button style={mystyle} variant="primary">Payment</Button>{' '}
    </div>
    );
}

export default Card;
