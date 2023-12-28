import NavBar from './components/Navbar';
import Footer from './components/footer'
import ContactUs from './components/contactus/Contactuspage';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./style.css";
import HomePage from './components/Home/HomePage';
import Login from './components/auth/login';
import Signup from './components/auth/signup';

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <Router>

        <Routes>
           <Route path="/" element={ <HomePage />} />

          <Route path="/contactus" element={<ContactUs />}/>

          <Route path="/login" element={<Login />}/>

          <Route path="/signup" element={<Signup />}/>

          <Route path="*"
          // element={<Navigate to="/"/>}
          />
        </Routes>

    </Router>
  );
}

export default App;

