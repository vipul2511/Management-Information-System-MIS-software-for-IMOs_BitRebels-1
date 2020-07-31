import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singlemadhya extends Component{
  
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
                            <img src={require('./img/sin-madhya.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Madhya Pradesh</h2>
                <div className="text-box">
                <p> MP State Cooperative Dairy Federation Ltd.. Bhopal is working for the empowerment of women by forming them in SHGs. 
                    The Federation has a number of SHGs. The Dairy federation received micro-credit assistance from RMK for its members. 
                    All the members associated with the federation not only got financial help but also received training for heir capacity building etc. Smt 
                    Basanta Manohar is a member of Love Kush Mahila Self Help Group, which is affiliated with the federation. She belongs to a very poor family. 
                    It was difficult for her to feed her large family before joining the Group. Through the group she received financial assistance from RMK for 
                    purchase of a cow of good breed, which gives around 10 litre of milk per day. By selling cow milk to the Milk Samiti she gets good return. 
                    After meeting all the expenditure she has a regular income of around Rs. 1500/- to Rs. 1600/- per month. This income has made her to live with 
                    dignity in the society. She could arrange a better marriage for her daughter and also give education to her children, which was not possible 
                    before becoming the member of the SHG. She has put her children in school. The micro-credit support has helped Mrs. Basanta Manohar to live a 
                    life of self-reliance. Mrs. Basanta Manohar 
                    says that the change in her life would not have been possible if there was no financial assistance from RMK.</p>
                    <p> Similarly Mrs. Mamta Subhas is a divorce and member of the Jai Yogeshwar Self Help Group. She belongs to a poor family of agricultural 
                        labourers and was leading a very poor life. She and other members of her group approached RMK through the Indore Milk Federation for micro 
                        credit assistance. Through her group she got micro credit assistance from RMK for the purchase of a buffalo. She started selling milk to the 
                        Cooperative Milk Society, Indore. Now she has repaid the loan and earning a monthly income of around Rs. 2000/- per month. She does not depend
                         on any one since she has a regular income of Rs. 2000/-, which is sufficient for her to live a life of dignity in the society. 
                        She is thankful to the Indore Milk Federation and R.M.K. for the extending her micro credit help. </p>
                    <p> There is yet another example of Jai Durga Self Help Group consisting of 20 members associated with Dugdh Sahkari Samiti, Marya, Bhillai. 
                        The group got micro-finance help from RMK for purchase of milking animals. Before joining the group the women members were working as labourers and living a life full of misery. On receipt of micro credit assistance from RMK these dedicated women purchased cow/buffalos and started selling milk to the Samiti and earned a good profit, which was shared by the members. This, however, created awareness among the group members for better maintenance of milking animals. Not only this, these women started selling cows to other members and making a good profit for the group. The micro-credit support has helped the group members to live a life with dignity in the society.
                         The members of the SHG are thankful to RMK for providing micro credit at a reasonable rate of interest.
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
export default singlemadhya;