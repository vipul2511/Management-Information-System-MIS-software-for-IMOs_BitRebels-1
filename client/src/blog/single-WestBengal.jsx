import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singlewestbengal extends Component{
  
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
                            <img src={require('./img/sin-WestBengal.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>West Bengal</h2>
                <div className="text-box">
                <p> <span style={{color:'black', fontSize:'17px'}}> >> </span>This is a story of Mrs. Rosonara Halder, W/o Abu Siddik Halder, Vill. – Nij 
                Uttarpara, P.S. – Joynagar, Distt. – South 24-Parganas, West Bengal a member of one of the SHGs formed by Human Development Centre (HDC). 
                HDC is a grass root NGO partner of RMK. Mrs. Halder is from a very poor family. In the absence of regular income her family was very much 
                disturbed. It was very difficult for the family to survive. The family consisted of husband wife and 2 children.</p>
                <p>
                Mrs. Rosonara Halder came to know about HDC NGO through her neighbours. She joined one of the Groups. HDC applied for loan from RMK.
                 Micro-finance assistance received from RMK, a loan of Rs. 3,000/- was sanctioned to Mrs. Halder. She opened a small tea stall by the 
                 side of her house. Gradually she expanded her business with regular help from HDC. Her financial income improved in the course of time. 
                 This helped her to educate her children. The children are now studying in a school. Apart from the Tea Stall she has now opened a meat 
                 shop also. This has increased her monthly income from Nil to over Rs. 8,000/- per month. Now she has no family problem and are a happy family. 
                This has happened with the help of micro-finance credit from RMK.
                </p>
                <p> Mrs. Yosoda Ghosh has a family of 6. The income of her husband was around Rs. 10,000 per annum from selling of milk. This income was hardly 
                        sufficient for the family to live a good life. In the absence of adequate capital it was difficult for the family
                         to expand their milk business. Mrs. Yosoda joined a SHG formed by Bandhan NGO.
                        </p>
                     <p> <span style={{color:'black', fontSize:'17px'}}> >> </span>
                    Micro credit assistance received from RMK through the NGO helped her to purchase a cow and expand her business. Her monthly 
                    income substantially increased. The help provided by the NGO with financial support from RMK had helped the SHG member to earn and save 
                    an additional Rs. 300/- per month. As a result of this, the socio economic status of Ms. Yosoda has gone up and she has become self-reliant. 
                    This economic change has helped her to give proper education and medical care to her children. The other women members of 
                    the village has been encouraged with her success and formed another SHG.
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
export default singlewestbengal;