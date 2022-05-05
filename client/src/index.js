import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, BrowserRouter as Router,Navigate,Route, Routes} from "react-router-dom";
import { UserContextProvider} from './Store/userContext';

ReactDOM.render(
  <UserContextProvider>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  </UserContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();