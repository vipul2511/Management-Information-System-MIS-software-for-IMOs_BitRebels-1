import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singleuttarpradesh extends Component{
  
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
                            <img src={require('./img/sin-uttarPradesh.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Uttar Pradesh</h2>
                <div className="text-box">
                <p> Mrs. Krishna Devi from Lalla Ka Purva, Block Sohawal, District Faizabad, UP is from a very poor family. Her family consists of 
                    4 members but their house is situated at some distance from the main village and as such initially she was not aware of any SHG.</p>
                    <p> However, once she came to know about the SHG and the benefits of micro-credit assistance she joined the group. She approached PANI a grass 
                        root NGO working in that area.and NGO partner of RMK for micro-credit assistance that was sanctioned to her. With the credit, 
                        she purchased a sewing machine. Her husband being a tailor could work on her behalf. Slowly she expanded her activities and went for 
                        another set of improved sewing machines. This helped her to raise her monthly income. Again she took loan from RMK through PANI. S
                        he diversified her business from a tailor shop to electronic goods shop. This diversification gave her courage for a big shop and business. 
                        She is now running a shop and selling electronic goods. Her monthly income has gone up. Her standard of living has also gone up. She sends her
                         children to a good school and living a life of self-respect Her husband gives her full support and treats her as equal partner in the life. 
                        This gives her much satisfaction. She is thankful to RMK for extending micro credit assistance and making her life joyful. </p>
                 
                </div>
                </div>
        </Row>
    </Container>
    </div>
</div>
    );
    }
}
export default singleuttarpradesh;