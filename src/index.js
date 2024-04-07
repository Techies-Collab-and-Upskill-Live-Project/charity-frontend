import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./auth/context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Toaster from "./components/toaster";
import { CurrencyProvider } from "./context/CurrencyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CurrencyProvider>
          <Toaster />
          <App />
        </CurrencyProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
