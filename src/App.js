import NavBar from './components/Navbar';
import Footer from './components/footer'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./style.css";
import HomePage from './components/Home/HomePage';
import FrequentlyAsked from './components/frequentlyask';

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <Router>
         <NavBar />
         <HomePage />
         <FrequentlyAsked />
        <Routes>
           <Route path="/"
          //  element={}
           />
          
          <Route path="/project"
          // element={<Projects />}
          />
          <Route path="/about"
          // element={<About />}
          />
          <Route path="/resume"
          // element={<Resume />}
          />
          <Route path="*"
          element={<Navigate to="/"/>}
          />
        </Routes>
       {/* <Footer /> */}

    </Router>
  );
}

export default App;

