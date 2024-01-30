//import NavBar from './components/common/Navbar.jsx';
//import Footer from './components/common/footer.jsx'
import ContactUs from './pages/contactus/Contactuspage.jsx';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

import "./style.css";
import HomePage from './pages/Home/HomePage.jsx'
import LoginPage from './auth/login/page.jsx';
import Signup from './auth/signup.jsx';
import Forgotpassword from './auth/forgotpassword.jsx';
import DicoverPage from './pages/dicover/page.jsx';
import ExploreCategory from "./pages/explore category/page.jsx"
import DonatePage from "./pages/donate/page.jsx"
import Payment from './pages/payment/payment.jsx';
import ResetPassword from './auth/resetpassword.jsx';
import VerifyMail from './auth/verifymail.jsx';
import SuccessMessage from './auth/success.jsx';
import VerificationCode from './auth/verificationcode.jsx';


function App() {
  return (

    <Router>

        <Routes>
           <Route path="/" element={ <HomePage />} />

          <Route path="/contactus" element={<ContactUs />}/>

          <Route path="/login" element={<LoginPage />}/>

          <Route path="/signup" element={<Signup />}/>

        <Route path="forgotpassword" element={<Forgotpassword />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="verifyemail" element={<VerifyMail />} />
        <Route path="successmessage" element={<SuccessMessage />} />
        <Route path="verificationcode" element={<VerificationCode/>}/>

          <Route path="/discover" element={<DicoverPage/>}/>

          <Route path="/explorecategory" element={<ExploreCategory/>}/>
          <Route path="/donate-page" element={<DonatePage/>}/>

          <Route path="/paymentpage" element={<Payment/>}/>
        </Routes>

    </Router>
  );
}

export default App;

