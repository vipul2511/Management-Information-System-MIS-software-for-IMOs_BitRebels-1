import React ,{Component} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./blog.css";
class singleuttarnchal extends Component{
  
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
                            <img src={require('./img/sin-uttarnchal.jpg')} alt=""/>
                        </figure>
                        </article>
            </div>
            <div className="post-body">
                <h2>Uttarnchal</h2>
                <div className="text-box">
                <p> Women’s Development Organization (WDO) is a registered organization under Societies Registration Act 1860 since 1990. WDO is working as an
                     “Apex Body” for marketing of products manufactured / produced by rural folk/women. WDO is working with 4-tier system i.e. 
                    WDO-head office on all India basis- State projects office-related registered Societies – at grass root level and – Self Help Groups.</p>
                    <p> Generally Self – Help Groups (SHGs) consist of 10 to 20 members. But the area where WDO is working formation of large group is difficult.
                         Therefore, SHGs formed by WDO consist of 5-15 members at grass root level in the village, remote and backward areas. These groups are 
                         mobilized after providing necessary training for capacity building apart from facilities available through training for woolen & cotton articles. </p>
                    <p> WDO organized 10 groups with 15 members each for making Barrack Blankets Thus 150 members were grouped for barrack blankets making. 
                        Separately there are 450 family members associated with these groups in different villages.
                         Thus 600 members of traditional weaver families were associated.
                    </p>
                    <p>
                    Similarly 300 women members in 20 groups with 15 members in each group were formed by WDO. In these groups about 900 family members were 
                    associated from traditional weavers families. Thus WDO was able to add 1200 more families’ members in their SHGs. Another 20 groups 
                    consisting of 15 members were formed in the subsequent years These groups nominated 10 members from their groups to form a Federation
                     and registered it in a society. All the members of these 50 SHGs consisting of 900 families indirectly became member of the Federation
                      so that all the 3000 members jointly can work at their convenience. 
                    In the bringing the WDO representative viz the Secretary guided the federation, till it become independent and self-sustainable.
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
export default singleuttarnchal;