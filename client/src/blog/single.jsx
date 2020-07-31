import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singleandnick extends Component{
  
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
                            <img src={require('./img/sin-and-nic.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Andaman Nicobar</h2>
                <div className="text-box">
                <p>Mercury Self Help Group, Buniyadabad promoted by 
                            Yuvasakthi on 21/09/2010 with 14 members. The Group started collecting saving 
                            t their monthly meeting and deposited in the savings bank account maintained 
                            with ANSC Bank Ltd., Haddo. There after they started lending among themselves
                            and increased savings Rs. 36,400/- Yuvasakthi has arranged credit linkage with ANSC Bank for Rs. 25,000/- during 18/02/2011 and Mercury has 
                            successfully completed the loan again the group has approached Yuvasakthi for loan to enter into individual income generation. On due 
                            assessment a sum of Rs. 2,00,000/- was sanctioned on 26/06/2011. In this loan facility Smti Chitra Ravi has availed Rs. 25,000/- and invested 
                            in her business (Fancy Stores). She purchased fancy items and school stationary etc. earlier she had arranged this shop through bank loan. Now she 
                            is doing the turnover of Rs. 40,000/- every month and earning Rs. 4,000/- to Rs. 5,000/- and she is repaying the loan amount in time. Her
                             children are studying in good school and she is not depend on her husband for any of her family need. She expressed her gratitude to 
                             Yuvasakthi RMK loan support which enabled her to become what she is now.</p>
                </div>
                </div>
        </Row>
    </Container>
    </div>
</div>
    );
    }
}
export default singleandnick;