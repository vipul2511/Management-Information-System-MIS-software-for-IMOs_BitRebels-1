import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';


class Footer extends Component{

    state={
        year:new Date().getFullYear(),
    }
    render(){
        return(
        
      
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
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/application">Repayment Track</Link></li>
                            <li><Link to="/Gallery">Gallery</Link></li>
                            <li><Link to="/DonationPayment">Donation</Link></li>
                            <li><Link to="/blog">Success Stories</Link></li>
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
