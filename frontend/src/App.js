import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import Registration from './pages/Registrations'
import Home from './pages/Home';
import Registrationss from './pages/Registrationss'

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/registration" element={<Registration />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/reg" element={<Registrationss />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
