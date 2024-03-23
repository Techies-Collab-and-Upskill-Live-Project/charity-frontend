//import NavBar from './components/common/Navbar.jsx';
//import Footer from './components/common/footer.jsx'
import ContactUs from "./pages/contactus/Contactuspage.jsx";
import "./App.css";
import React, { useContext } from "react";
import {
  //   BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./style.css";
import HomePage from "./pages/Home/HomePage.jsx";
import SignupPage from "./auth/signup/page.jsx";
import ForgotpasswordPage from "./auth/forgestpassword/page.jsx";
import LoginPage from "./auth/login/page.jsx";
import ExploreCategory from "./pages/explore category/page.jsx";
import AuthContext from "./auth/context/AuthContext";
import PrivateRoutesComponent from "./auth/utils/PrivateRoutesComponent";

function App() {
  const { user } = useContext(AuthContext);
  return (
    //     <Router>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route
        path="/login"
        element={user ? <Navigate replace to="/discover" /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate replace to="/discover" /> : <SignupPage />}
      />

      <Route path="/explorecategory" element={<ExploreCategory />} />

      <Route path="forgotpassword" element={<ForgotpasswordPage />} />

      {/*  PrivateRoutes */}
      <Route path="/*" element={<PrivateRoutesComponent />} />
    </Routes>
  );
}

export default App;
