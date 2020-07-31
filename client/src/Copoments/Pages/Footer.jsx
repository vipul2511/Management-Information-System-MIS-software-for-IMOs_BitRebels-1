import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';


class Footer extends Component{

    state={
        year:new Date().getFullYear(),
    }
    render(){
        return(
        
        //     <div className="footerBottom">
         
               
        //  <div className="CopyRights">Copyright © {this.state.year} - All Rights Reserved - Official Website of Rashtriya Mahila Kosh, Ministry of Women and Child Development, Government of India</div>
           
        //      <div className="footerItemsr">
                         
        //                         <ul>
        //                             <li><Link to="/Home">Home</Link></li>
        //                             <li><Link to="/Repayment">Repayment Tracker</Link></li>
        //                             <li><Link to="/gallery">Gallery</Link></li>
        //                             <li><Link to="/Blog">Blog</Link></li>
        //                             <li><Link to="/About">About Us</Link></li>
        //                         </ul>
        //                     </div>
        //                     <br style={{clear:"both"}} />
                                                      
        //     </div>
        <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-5 CopyRights">
                   
        <span>Copyright &copy;{this.state.year} - All Rights Reserved - By Rashtriya Mahila Kosh, Ministry of Women and Child Development, Government of India</span>
      
                    <div className="space-30 hidden visible-xs"></div>
                </div>
                <div className="col-xs-12 col-md-7" >
                    <div className="footer-menu">
                        <ul>
                            <li><Link to="/a">Home</Link></li>
                            <li><Link to="/b">Repayment Track</Link></li>
                            <li><Link to="/c">Gallery</Link></li>
                            <li><Link to="/d">Contacts Us</Link></li>
                            <li><Link to="/e">Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
         
        );
    }
}
export default Footer;
