import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singledelhi extends Component{
  
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
                            <img src={require('./img/sin-delhi.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Delhi</h2>
                <div className="text-box">
                <p> <span style={{color:'black', fontSize:'17px'}}> >> </span>Integrated National Development Centre for Advancements Reforms and Education 
                (INDCARE) a Delhi based NGO after obtaining financial assistance from RMK is successfully working with slum urban and rural poor women in 
                different part of the city with a view to improving their living conditions and quality of life.INDCARE promotes such SHGs, 
                Cooperatives, Mahila Chetna Munch, which are instrumental in catering the immediate social and economic basic needs of the poor women.</p>
              <p> <span style={{color:'black', fontSize:'17px'}}> >> </span>
              INDCARE has formed 1600 SHGs of nearly 50,000 women. In Delhi the organization with the help of MCD and Delhi Administration is 
              implementing the Mid Day Meal Schemes for 1,00,000 children of 164 government run Primary Schools. The SHG Members have been 
              facilitated in such a way that they directly involved themselves in the management part of the programme. 1500 women are currently 
              engaged in this programme. INDCARE is extending them vocational skill development and training with a view to increase their 
              technical and social competencies and working methods. The pilot project is working successfully. </p>
                </div>
                </div>
        </Row>
    </Container>
    </div>
</div>
    );
    }
}
export default singledelhi;