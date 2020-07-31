import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ReactDOM from "react-dom";

import Home from './Copoments/Pages/Home';
import FirebaseTest from './Copoments/Pages/firebaseTest';
import Application from './Copoments/Pages/Application';
import PaymentID from './Copoments/Pages/Payment';
import Basics from './Copoments/Pages/Payment/Basicpayment';
import MainLoan from './Copoments/Pages/ApplyLoan/MainLoan';
import Loan from './Copoments/Pages/ApplyLoan/loan';
import Details from './Copoments/Pages/ApplyLoan/detail';
import Dashboard from './Copoments/Pages/dashboard/Dashboard';
import Display from './Copoments/Pages/ApplyLoan/DisplayAppID';
import RepayAdmin from './Copoments/Pages/dashboard/RepayAdmin';
import Verified from './Copoments/Pages/verified';
import AdminVerified from './Copoments/Pages/dashboard/verification';
import SignUp from './Copoments/Pages/sign-up/SignUp';
import SignIn from './Copoments/Pages/sign-in/SignIn';
import Loading from './loading';
import Status from './Copoments/Pages/Track status/Status'
import FinalPrint from './Copoments/Pages/ApplyLoan/finalprint';
import Card from './Copoments/Pages/Card/Card';
import SMSForm from './Copoments/Pages/sms';
import PersonDetails from './Copoments/Pages/dashboard/Admin Verify/table';
import EMI from './Copoments/Pages/dashboard/EMI/EMI';
import Profilecard from './Copoments/Pages/dashboard/Users/Profilecard';
import Donation from './Copoments/Pages/dashboard/donation/donation';
import DonationPayment from './Copoments/Pages/dashboard/donation/Basicpayment';
import blog from './blog/blog';
import singleandnick from './blog/single';
import singleandhar from './blog/singgle-andhar';
import singlebihar from './blog/single-bihar';
import singledelhi from './blog/single-Delhi';
import singlejharkhand from './blog/single-Jharkhand';
import singlemadhya from './blog/single-madhya';
import singlemanipur from './blog/singgle-Manipur';
import singlerajasthan from './blog/single-rajasthan';
import singleuttarpradesh from './blog/single-UttarPradesh';
import singleuttarnchal from './blog/single-Uttarnchal';
import singletamilnadu from './blog/single-TamilNadu';
import singlewestbengal from './blog/single-WestBengal';
import Gallery from './Copoments/Pages/gallery/Gallery';
import FinalView from './Copoments/Pages/dashboard/FinalView/finalprint';
import AdminGallery from './Copoments/Pages/dashboard/Gallery/AdminGallery';
import ProtectedRoute from './Copoments/Pages/ProtectedRoute/ProtectedRoute';
import AdminSignIn from './Copoments/Pages/dashboard/Sign/SignIn';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Loading}/>
      <Route path="/Home" component={Home}/>
      <Route path="/firebase" component={FirebaseTest}/>
      <Route path="/application" component={Application}/>
      <Route path="/PayID" component={PaymentID} />
      <Route path="/BasicsPayment" component={Basics} />
      <Route path="/ApplyLoan" component={MainLoan} />
      <Route path="/loan" component={Loan} />
      <Route path="/Details" component={Details} />
      <Route path="/Display" component={Display} />
      <Route path="/Repay" component={RepayAdmin} />
      <Route path="/Verification" component={Verified} />
      <Route path="/AdminVerify" component={AdminVerified} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Status" component={Status}/>
      <Route path="/Final" component={FinalPrint}/>
      <Route path="/Card" component={Card}/>
      <Route path="/SMS" component={SMSForm}/>
      <Route path="/AdminDetails" component={PersonDetails}/>
      <Route path="/EMI" component={EMI}/>
      <Route path="/Profile" component={Profilecard}/>
      <Route path="/Donation" component={Donation}/>
      <Route exact path="/SignIn" component={SignIn} />
      <Route path="/DonationPayment" component={DonationPayment}   />
      <Route path="/blog" component={blog}/>
      <Route  path="/singleandnick" component={singleandnick}></Route>
       <Route path="/singleandhar" component={singleandhar}></Route>
       <Route path="/singlebihar" component={singlebihar}></Route>
       <Route path="/singledelhi" component={singledelhi}></Route>
       <Route path="/singlejharkhand" component={singlejharkhand}></Route>
       <Route path="/singlemadhya" component={singlemadhya}></Route>
       <Route path="/singlemanipur" component={singlemanipur}></Route>
       <Route path="/singlerajasthan" component={singlerajasthan}></Route>
       <Route path="/singleuttarpradesh" component={singleuttarpradesh}></Route>
       <Route path="/singleuttarnchal" component={singleuttarnchal}></Route>
       <Route path="/singletamilnadu" component={singletamilnadu}></Route>
       <Route path="/AdminGallery" component={AdminGallery}></Route>
       <Route path="/singlewestbengal" component={singlewestbengal}></Route>
       <Route path="/Gallery" component={Gallery}></Route>
       <Route path="/FinalView" component={FinalView}></Route>
       <Route exact path="/AdminSignIn" component={AdminSignIn} />
       {/* <Route  path="/Dashboard" component={Dashboard} /> */}
       <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
        <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
     </BrowserRouter>
  );
}

export default App;
