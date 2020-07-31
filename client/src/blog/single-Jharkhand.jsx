import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singlejharkhand extends Component{
  
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
                            <img src={require('./img/sin-jhar.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Jharkhand</h2>
                <div className="text-box">
                <p> <span style={{color:'black', fontSize:'17px'}}> >> </span> Mrs. Subhadra Mahto from Village Damudhi in Potka Block of East 
                Singhbhum district, got married when she was very young. She could study only upto 6th class, but had big dreams. She always 
                thought that how she will be able to earn of her own? Will she ever be independent? But with such poor educational background, 
                how can she do so?</p>
<p>On the other hand the husband of Mrs. Subhadra’s was a labourer working with a contractor. The couple had no adequate farm land for livelihood. 
    So there were crisis in the family, as day to day expenses were difficult to manage. The situation was more difficult during drought and famine
    . Her husband suddenly met with an accident and got his leg injured. As a result of this his monthly income was reduced to Rs. 250/-
     per day from Rs. 380/ per day. Conditions were turning bad to worse for them. Daily bread and butter was at stake.</p>

<p>A Ray of Hope and answer to all her questions was found immediately after her joining SHG. She realized that she is not alone. 
    There are other women in the group to help her.</p>

<p>The representative of the NGO explained to her how she can take loan of Rs. 10,000 - Rs. 35,000 from RMK under Main Loan Scheme to meet 
    emergency situations which can be house repair, medical emergency or starting a business enterprise or advance agricultural farming etc.</p>

<p>Mrs. Subhadra approached Kalamandir a Rashtriya Mahila Kosh partner NGO in Jharkhand. She was sanctioned loan of Rs. 12,000 for house repair 
    and ` 10,000 for poultry. Poultry of 300 chicks had been a promising source of livelihood for her. She sold chicken and earned Rs. 3000 - Rs.
     5000 per month. Now she doesn’t have to rely on anyone. She is now self-sufficient and is able to generate reasonable money to run her family
     smoothly and educate the kids. Her status in the society has gone up. Her voice is heard properly in all matter both in the family and society.</p>
<p>
Now, she is a woman for whom Rashtriya Mahila Kosh stands for a CHANGE MAKER. She never thought that SHG and RMK can bring such a change in her life.</p>
  <p> <span style={{color:'black', fontSize:'17px'}}> >> </span> Kiran Bachat Samiti (SHG) is a group of 20 women in a village 
                    called Sindpur of Barhi Panchayat Samiti in Hazaribagh District. The local NGO viz Jan Jagran Kendra, is assisting its members of Kiran Bachat 
                    Samiti by extending them micro credit from RMK.</p>
<p>The group members individually get loan from the Samiti to purchase animals like cows, goats etc. with a view to increase 
their monthly income. But one of the members Mrs. Geeta Devi had other plans in mind. She applied for micro-credit assistance
 from RMK through the NGO for starting a Bicycle Repair Shop. With this innovative and very successful idea, Mrs. Geeta Devi has achieved a 
 greater economic status in her family. She has a greater say in the decision-making process of the family. The micro-credit support has helped 4
 Mrs. Geeta Devi live a life of dignity, respect and self-reliance. </p>
                   
                </div>
                </div>
        </Row>
    </Container>
    </div>
</div>
    );
    }
}
export default singlejharkhand;