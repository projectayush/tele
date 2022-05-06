import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import Registration from './pages/Registration'
import Home from './pages/Home';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/registration" element={<Registration />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
