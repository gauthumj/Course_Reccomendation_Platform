import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbarmain from './Navbar.jsx';
import Home from './home.js';
import Login from './login.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './signup.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbarmain />
    <Home /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
