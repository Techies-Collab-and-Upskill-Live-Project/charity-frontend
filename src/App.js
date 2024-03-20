//import NavBar from './components/common/Navbar.jsx';
//import Footer from './components/common/footer.jsx'
import ContactUs from "./pages/contactus/Contactuspage.jsx";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./style.css";
import HomePage from "./pages/Home/HomePage.jsx";
import SignupPage from "./auth/signup/page.jsx";
import ForgotpasswordPage from "./auth/forgestpassword/page.jsx";
import PaymentSuccessfullPage from "./pages/payment/paymentsuccessfullpage.jsx";
import ResetPasswordPage from "./auth/resetpassword/page.jsx";
import VerifyMailPage from "./auth/verifiyemail/page.jsx";
import VerificationCodePage from "./auth/verifiycode/page.jsx";
import SuccessMessagePage from "./auth/successfullmessage/page.jsx";
import LoginPage from "./auth/login/page.jsx";
import DicoverPage from "./pages/dicover/page.jsx";
import ExploreCategory from "./pages/explore category/page.jsx";
import DonatePage from "./pages/donate/page.jsx";
import Payment from "./pages/payment/payment.jsx";
import Dashboard from "./pages/dashboard/page.jsx";
import DonationPage from "./pages/dashboard/donations/page.jsx";
import EventsPage from "./pages/dashboard/events/page.jsx";
import CampaignPage from "./pages/dashboard/campaign/page.jsx";
import AccountSettingPage from "./pages/dashboard/account/page.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="forgotpassword" element={<ForgotpasswordPage />} />
        <Route path="resetpassword" element={<ResetPasswordPage />} />
        <Route path="verifyemail" element={<VerifyMailPage />} />
        <Route path="successmessage" element={<SuccessMessagePage />} />
        <Route path="verificationcode" element={<VerificationCodePage />} />

        <Route path="/discover" element={<DicoverPage />} />
        <Route path="/explorecategory" element={<ExploreCategory />} />
        <Route path="/donate-page" element={<DonatePage />} />
        <Route path="/paymentpage" element={<Payment />} />
        <Route
          path="/paymentsuccessfull"
          element={<PaymentSuccessfullPage />}
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donationpage" element={<DonationPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/campaign" element={<CampaignPage />} />
        <Route path="/account" element={<AccountSettingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
