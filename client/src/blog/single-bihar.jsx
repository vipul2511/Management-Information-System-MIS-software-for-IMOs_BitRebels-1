import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singlebihar extends Component{
  
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
                            <img src={require('./img/sin-bihar.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Bihar</h2>
                <div className="text-box">
                <p> <span style={{color:'black', fontSize:'17px'}}> >> </span> Mrs. Rajakani is a widow and belongs to a very poor family.She formed a SHGs with other women of her village sponsored by Aid India, through 
                    its grass root NGO.Inspired, by, the progress made by other members of the SHGs, she thought becoming a member as she wanted to go in dairy 
                    business. For this she wanted to purchase cows for which money was required. She approached Aid India for micro-credit assistance from RMK.
                    On receipt of loan from RMK she purchased 2 milking cows and started milk selling business successfully.From the sale of the milk she earns\ed
                    Rs. 100/- per day as profit.This income has made her self sufficient and able to stand on her own feet.This has also helped her to live a life
                    of respect with dignity in her community. She has now enrolled her children in a school with a view to give them good education.She is thankful to RMK for making her economically independent.</p>
                    <p> <span style={{color:'black', fontSize:'17px'}}> >> </span> The Jan Jagran Kendra, a local NGO in Hazaribagh District of Bihar is assisting its SHG members including the Kiran Bachat Samiti by extending 
                        them micro credit from RMK.Kiran Bachat Samiti (SHG) is a group of 20 women in a village called Sindpur of Barhi Panchayat Samiti in 
                        Hazaribagh District. The group members individually get loan from the Samiti to purchase animals like cows, goats etc. 
                        with a view to increase their monthly income.But one of the members Mrs.Geeta Devi had other plans in mind.She applied for micro-credit assistance 
                        from RMK through the NGO for starting a Bicycle Repair Shop.She got success in the trade.Mrs.Geeta Devi has achieved a greater economic status 
                        her family.She has a greater say in the decision-making process of the family. The micro-credit support has helped Mrs. Geeta Devi to live a 
                        life of dignity, respect and self-reliance.Mrs. Geeta Devi is of the view that for her success the credit should go to RMK and the local NGO 
                        Jan Jagran Kendra without their help this was not possible. </p>
                    <p> <span style={{color:'black', fontSize:'17px'}}> >> </span>
                    Smt. Sheela Devi a member of Schedule Cast Family, lives with her husband in Patwa Toli in rural area of Vaishali district in Bihar. 
                    Her Husband is an agricultural laborer, the family is economically weak. As the income of her husband was seasonal, the family lived in extreme poverty.
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
export default singlebihar;