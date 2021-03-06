import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import './index.css';
import { BrowserRouter, BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './Store/userContext';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// import { UserContextProvider} from './Store/userContext';


root.render(
  <UserContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
