import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import Registration from './pages/Registrations'
import Home from './pages/Home';
// import Registrationss from './pages/Registrationss'
import Registrations from './pages/Registrations';
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword';
import ConfirmPassword from './pages/ConfirmPassword';


function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/registration" element={<Registration />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/reg" element={<Registrations />}></Route>
        <Route exact path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route exact path="/resetpassword/:token" element={<ResetPassword />}></Route>
        <Route exact path="/confirmpassword/:token" element={<ConfirmPassword />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
