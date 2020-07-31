 import React,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import "./blog.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import {Link} from "react-router-dom";

class blog extends Component{
 render(){
    return(
       
        <div className="App">
       <header className="site-header">
        <div className="container">
            <div className="row">
            <Col xs={12}  className="text-center">
                <h1 className="white-color">Out Latest Blog</h1>
                 <div className="bread">
                 <p className="white-color"><Link to="index.html" style={{textDecoration:'none', color: "white"}}>Home</Link> / Blog</p>
                  </div>
                </Col>
            </div>
        </div>
    </header>
    <div className="section-padding">
      <Container>
        <Row>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/And-nickbar.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Andaman Nicobar</div>
            </div>
            <h4  className="text-color" >Mercury Self Help Group, Buniyadabad promoted by Yuvasakthi on 21/09/2010 with 14 members.</h4>
             <Link to="/singleandnick" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/andh-pra.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Andhra Pradesh</div>
            </div>
            <h4  className="text-color" >Mrs. Muntha Santha wife of ShriM. Samasiva Rao is a agricultural labourer and belongs to a very poor family. </h4>
             <Link to="/singleandhar" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/bihar.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Bihar</div>
            </div>
            <h4 className="text-color" >Smt. Sheela Devi a member of Schedule Cast Family in Patwa Toli in rural area of Vaishali district in Bihar. </h4>
             <Link to="/singlebihar" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/delhi.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Delhi</div>
            </div>
            <h4 className="text-color" >INDCARE has formed 1600 SHGs of nearly 50,000 women.
                                The pilot project is working successfully. </h4>
             <Link to="/singledelhi" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/jharkhand.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Jharkhand</div>
            </div>
            <h4  className="text-color"style={{textDecoration:'none'}} >Mrs. Subhadra Mahto from Village Damudhi in Potka Block district ,
                                 got married when she was very young. </h4>
             <Link to="/singlejharkhand" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/MadhyaPradesh.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Madhya Pradesh</div>
            </div>
            <h4 className="text-color"style={{textDecoration:'none'}} >Similarly Mrs. Mamta Subhas is a divorce and member of the Jai Yogeshwar Self Help Group. </h4>
             <Link to="/singlemadhya" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/manipur.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Manipur</div>
            </div>
            <h4  className="text-color"style={{textDecoration:'none'}} >One of the remarkable achievements of the organization is its Micro-Credit Programme supported by RMK. </h4>
             <Link to="/singlemanipur" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/Rajasthan.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Rajasthan</div>
            </div>
            <h4 className="text-color" >Nagala Harchand in Block Kama of Bharatpur district is one of the selected villages. </h4>
             <Link to="/singlerajasthan" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/uttar.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Uttar Pradesh</div>
            </div>
            <h4 className="text-color" >Mrs. Krishna Devi from Lalla Ka Purva, Block Sohawal, District Faizabad, UP is from a very poor family. </h4>
             <Link to="/singleuttarpradesh" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/Uttarnchal.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Uttarnchal</div>
            </div>
            <h4  className="text-color" >Women’s Development Organization is a registered organization under Societies Registration since 1990.</h4>
             <Link to="/singleuttarnchal" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/TamilNadu.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">Tamil Nadu</div>
            </div>
            <h4 className="text-color" >The people of this village belong to Muthuraja caste and are most backward and poor. </h4>
             <Link to="/singletamilnadu" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
        <article className="post-single">
        <figure className="post-media">
          <img src={require('./img/WestBengal.jpg')} alt=""/>
            </figure>
            <div className="post-body">
            <div className="post-meta">
            <div className="post-tags">West Bengal</div>
            </div>
            <h4  className="text-color" >Mrs. Rosonara Halder came to know about HDC NGO through her neighbours, joined one of the Groups. </h4>
             <Link to="/singlewestbengal" style={{textDecoration:'none'}}><h3 className="read-more" >Read More</h3>
            <AiOutlineArrowRight  className="arror" /></Link>
            </div>
        </article>
        </div>
        </Row>
      </Container>
      </div>
       
           </div>

   );
    }
}


export default blog;



