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
import SignupPage from './auth/signup/page.jsx';
import Forgotpassword from './auth/forgotpassword';
import DicoverPage from './pages/dicover/page.jsx';
import ExploreCategory from "./pages/explore category/main.jsx"
import DonatePage from "./pages/donate/page.jsx"
import Payment from './pages/payment/payment.jsx';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <Router>

        <Routes>
           <Route path="/" element={ <HomePage />} />

          <Route path="/contactus" element={<ContactUs />}/>

          <Route path="/login" element={<LoginPage />}/>

          <Route path="/signup" element={<SignupPage />}/>

          <Route path="forgotpassword" element={<Forgotpassword/>}/>

          <Route path="/discover" element={<DicoverPage/>}/>

          <Route path="/explorecategory" element={<ExploreCategory/>}/>
          <Route path="/donate-page" element={<DonatePage/>}/>

          <Route path="/paymentpage" element={<Payment/>}/>
        </Routes>

    </Router>
  );
}

export default App;

