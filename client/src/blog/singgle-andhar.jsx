import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";

class singleandar extends Component{
  
    render(){
    return (
<div className="App">
<header className="site-header">
        <div className="container">
            <div className="row">
            <Col xs={12}  className="text-center">
                <h1 className="white-color">Our Success Story</h1>
                 <div className="bread">
                  <p className="white-color"><Link to="index.html" style={{textDecoration:'none', color: "white"}}>Home</Link> / Single Blog</p>
                        </div>
                </Col>
            </div>
        </div>
    </header>
    <div className="section-padding">
    <Container>
        <Row>
        <div className="col-xs-12">
        <article className="post-single">
                        <figure className="post-media">
                            <img src={require('./img/sin-andhar.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Andhra Pradesh</h2>
                <div className="text-box">
                <p><span style={{color:'black', fontSize:'17px'}}> >> </span> Mrs. Jhansi Lakshmi wife of Shri B. Guruvamandadi is one of the group members of Balaji Sangham Dasarimatam Self Help Group 
                    sponsored by Rashtriya Seva Samiti (RASS). She was given proper training for Mango - Ginger Pickle making, Mango-Avakaya, Lemon, Ginger, 
                    Ginger with Garlic, Ginger without garlic, Onion, Red Chillies, Bitter Guard, Amla, Pudina,Tomato, Gongura, Gongura without garlic etc. 
                    This business is showing good results and the woman is getting good return on these products. Her profit has made her life comfortable. 
                    Her status in society has increased. She intends to expand the business after some improvement. Her business is attracting other women of the 
                    area to form SHG and do some business collectively. This would have been possible by micro-credit assistance from RMK through RASS.</p>
                    <p><span style={{color:'black', fontSize:'17px'}}></span> Mrs. N. Shiva Parvathi is a member of Tirumaleswara Sangham consisting of 14 group members.Before joining the group 
                        she was working with a photo frame shop and earning a little which was hardly to meet her requirements.After joining the group 
                        she underwent group training.The training inspired her to start her own business.She received micro credit assistance from RMK through the 
                        grass root NGO – RASS.With her hard work, she was able to expand her business, which gave her additional income.Her business is quite 
                        attractive and profitable.Her husband has subsequently joined her.From a very negligible income the husband wife are earning around ` 
                        8000/- per month.This has raised their living standard and earned respect in the society.This change in her 
                        life was possible through micro-credit programme of RMK and efforts made by the NGO. </p>
                        <p> <span style={{color:'black', fontSize:'17px'}}></span>
                        Mrs. Muntha Santha wife of ShriM. Samasiva Rao is a agricultural labourer and belongs to a very poor family.Due to very meager income it 
                        was very difficult for her family to live a good life.She came to know about the SHGs being formed by a local NGO called Gramasiri.She joined
                         the SHG and got micro-credit assistance from RMK through the NGO to start a small business.She started a small vegetable vending shop.In this 
                         business she earned a good profit and as such she purchased a shop.The income from the vegetable shop has raised her economic status.
                         Now she is able to give good education to her children. The micro-credit support has helped Mrs. Muntha Santha live a life of dignity, respect
                          and self-reliance.Mrs. Muntha Santha now intends to construct a good house and lead a comfortable life.Mr. 
                        Muntha Santha says that it would not been possible if there would have no financial assistance from RMK and GRAMASIRI – NGO.
                        </p>
                </div>
                </div>
        </Row>
    </Container>
    </div>
</div>

    );
    }
}
export default singleandar;