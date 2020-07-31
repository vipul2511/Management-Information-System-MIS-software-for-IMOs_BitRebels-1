import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singlemanipur extends Component{
  
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
                            <img src={require('./img/sin-manipur.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Manipur</h2>
                <div className="text-box">
                <p> All Backward Classes & Economic Development Organization (ABCEDO), Samaram Bazar, Thoubal District of Manipur is implementing a number of 
                    socio-economic development programmes through Self Help Groups. One of the remarkable achievements of the organization is its Micro-Credit 
                    Programme supported by RMK. The organization has 64 Women SHGs. Some of the Groups have taken up vegetable farming to promote their economic 
                    status. Some of the members of these SHGs took 2 Hectare of land on lease at Rs. 40,000/- and planted 50 thousand number of cabbage plants 
                    and also some seasonal vegetables. This investment of Rs. 40,000/- gave them a profit of Rs. 2,39,000/-. This has encouraged them to go for 
                    agricultural inputs like tractor and encourage other members of group to join the SHGs so that they also become financially strong and independent.</p>
                    
                </div>
                </div>
        </Row>
    </Container>
    </div>
</div>
    );
    }
}
export default singlemanipur;