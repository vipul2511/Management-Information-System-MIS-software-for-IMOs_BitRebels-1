import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singlerajasthan extends Component{
  
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
                            <img src={require('./img/sin-rajasthan.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Rajasthan</h2>
                <div className="text-box">
                <p> LUPIN Human Welfare and Research Foundation a grass root NGO working in the selected villages for its economic development. Nagala Harchand in 
                    Block Kama of Bharatpur district is one of the selected villages. The villagers in the village are generally agricultural labourers and are 
                    not only backward but also very poor. The NGO formed a number of SHGs of men and women. Women were more enthusiastic than men. Therefore, they 
                    took active part in formation of several groups. Proper training was given to the groups by the NGO for different trades. Women preferred 
                    Tulsi Mala making and animal husbandry. A request for micro credit assistance was made to RMK through the local NGO. Loan from RMK was 
                    provided to these groups by the NGO. The business of Mala making picked up and the sale increased. Similarly income from the sale of milk was 
                    increased. The economic condition of the village improved to a great extent. The social status of the villagers rose to a great extent. 
                    The women of the village joined the mainstream of development. It helped in raising the educational standard of the villagers. 
                    All the evil activities prevalent in the village being backward reduced substantially and the village achieved its full economic development. 
                    The micro credit assistance given by RMK to the 
                    SHG members through the NGO – Lupin Human Welfare & Research Foundation made all the economic and social development of the village possible.</p>
                   
                </div>
                </div>
        </Row>
    </Container>
    </div>
</div>
    );
    }
}
export default singlerajasthan;