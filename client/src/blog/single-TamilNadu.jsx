import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singletamilnadu extends Component{
  
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
                            <img src={require('./img/sin-tamil.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Tamil Nadu</h2>
                <div className="text-box">
                <p> <span style={{color:'black', fontSize:'17px'}}> >> </span> This is story of village Usilampatti under Palaapatti Panchayat of TN. 
                It is a drought prone village too. The people of this village belong to Muthuraja caste and are most backward and poor. 
                The village is gender biased and thus the condition of women is pathetic. However, the Society for Development of Human Abilities and 
                Environment called OAZONE a grass root NGO partner of RMK started forming Self Help Groups (SHGs) with a view to get rid of them of from 
                the clutches of moneylenders. A group of 30 women was formed and given training for rope making. Rope making was their traditional occupation. 
                For making ropes, fibers from the leaves of a plant called Agave are used as raw material. This plant is found in drought prone and wastelands
                 area. Therefore, some women started harvesting the leaves of AGAVE for making ropes. Before joining SHGs these women use to sell their 
                 product to the middleman who in-turn paid them less money and kept some amount as deposit with him. The condition of these women did not 
                 improve. However, after joining the SHGs they could get micro credit assistance from RMK through the NGO – OAZONE. With this loan they 
                 started Producers’ Cooperative to oversee the production and marketing activities of their product. The micro credit helped them in 
                 procuring raw material. They are now in a position to get good return for their products and are free from the clutches of moneylender. 
                 They have a regular income of Rs. 100/- to Rs. 150/- per day. The regular income has raised their standard of living, social 
                 status and their say in the family affairs.</p>
                    <p> <span style={{color:'black', fontSize:'17px'}}> >> </span> Madhar Nala Thondu Niruvanam (MNTN) a grass root NGO formed a number of SHGs. 
                    One of the SHGs is. – Sun Self Help Group consisting of 15 members. The economic condition of the group members was very poor before joining 
                    the SHG. The MNTN imparted the group training for income generating programme. After obtaining proper training, MNTN approached RMK for 
                    micro-credit assistance for the group. A loan was sanctioned to the Self Help Group for milk dairy business. This business gave them 
                    enough profits. The profit is shared among the group members. This has enabled them to raise their standard of living, their status in 
                    the society, given them the opportunity to educate their children and live a life of self-respect with dignity. Encouraged by the 
                    success of the group other women of the area followed the model for their SHG. 
                    The group members are all praise for the financial assistance given by RMK through the NGO. </p>
                    <p> <span style={{color:'black', fontSize:'17px'}}> >> </span>
                    Two SHGs consisting of 26 members mostly Dalits and Backward of village Thavalaiveeranpatti of Trichirapalli District started a 
                    dairying unit after taking micro-credit from Rashtriya Mahila Kos (RMK) through LEAD a grass root NGO. Initially the unit was started 
                    with a loan of Rs. 76,000/- but subsequently another loan of Rs. 2.99 lakh per group helped the unit to develop. The production of 
                    the unit was raised to 200 liters of milk per day. With the increase in the output the unit has been able to improve the livelihood of all 
                    the group members. The unit has provided additional employment of 3 women worker for managing the unit, collecting milk from the members and 
                    for maintaining the accounts of the unit. The profitability of the unit is more than 25 %. Keeping in view the fast growth of the unit the 
                    women has started growing fodder grass and trees in their farms. It is said that the progress made by these women is much more than that of 
                    men in any case. This growth has encouraged the women to start a cattle feed mixing unit and artificial insemination centre.
                     The members of the group are selling their milk through the Dairy Cooperative
                     but they are planning to go to the market directly with a view to get better price and profit.
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
export default singletamilnadu;