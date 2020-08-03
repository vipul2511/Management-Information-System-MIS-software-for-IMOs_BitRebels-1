import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import FirebaseTest from './Components/Pages/firebaseTest';
import Application from './Components/Pages/Application';
import FinalNGO from './Components/Pages/NGO/FinalViewing/finalView';
import PaymentID from './Components/Pages/Payment';
import Basics from './Components/Pages/Payment/Basicpayment';
import MainLoan from './Components/Pages/ApplyLoan/MainLoan';
import Loan from './Components/Pages/ApplyLoan/loan';
import Details from './Components/Pages/ApplyLoan/detail';
import Dashboard from './Components/Pages/dashboard/Dashboard';
import Display from './Components/Pages/ApplyLoan/DisplayAppID';
import RepayAdmin from './Components/Pages/dashboard/RepayAdmin';
import Verified from './Components/Pages/verified';
import AdminVerified from './Components/Pages/dashboard/verification';
import SignUp from './Components/Pages/sign-up/SignUp';
import SignIn from './Components/Pages/sign-in/SignIn';
import Loading from './loading';
import Status from './Components/Pages/Track status/Status'
import FinalPrint from './Components/Pages/ApplyLoan/finalprint';
import Card from './Components/Pages/Card/Card';
import SMSForm from './Components/Pages/sms';
import PersonDetails from './Components/Pages/dashboard/Admin Verify/table';
import EMI from './Components/Pages/dashboard/EMI/EMI';
import Profilecard from './Components/Pages/dashboard/Users/Profilecard';
import DonationPayment from './Components/Pages/dashboard/donation/Basicpayment';
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
import Gallery from './Components/Pages/gallery/Gallery';
import FinalView from './Components/Pages/dashboard/FinalView/finalprint';
import AdminGallery from './Components/Pages/dashboard/Gallery/AdminGallery';
import ProtectedRoute from './Components/Pages/ProtectedRoute/ProtectedRoute';
import AdminSignIn from './Components/Pages/dashboard/Sign/SignIn';
import NGO from './Components/Pages/NGO/ngo';
import NGOdetails from './Components/Pages/NGO/ngodetails';
import NGOloan from './Components/Pages/NGO/ngoloan';
import NGORepayAdmin from './Components/Pages/NGO/NGORepayAdmin';
import CurrentReport from './Components/Pages/dashboard/Report generate/Report';
import NGOApplication from './Components/Pages/NGO/NGOApplication'
import NGOFinalprint from './Components/Pages/NGO/NGOfinalprint'
import LastQuarter from './Components/Pages/dashboard/LastQuarter';
import LastQuarterVerification from './Components/Pages/dashboard/LastQuarterVerification';
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/LastQuarterVerification" component={LastQuarterVerification} />
    <Route path="/LastQuarter" component={LastQuarter} />
    <Route path="/Ngo" component={NGO} />
    <Route path="/CurrentMonth" component={CurrentReport} />
    <Route path="/Ngodetails" component={NGOdetails} />
    <Route path="/Ngoloan" component={NGOloan} />
      <Route path="/NGOAdmin" component={NGORepayAdmin} />
      <Route path="/NGOApplication" component={NGOApplication} />
      <Route path="/FinalNGO" component={FinalNGO} />
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
       <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
        <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
     </BrowserRouter>
  );
}

export default App;
