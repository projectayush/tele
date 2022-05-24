import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
// import Registrationss from './pages/Registrationss'
import Registrations from './pages/Registrations';
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword';
import ConfirmPassword from './pages/ConfirmPassword';
import AddTicket from './pages/AddTicket';
import AllTickets from './pages/AllTickets';
import TicketDetail from './pages/TicketDetail';
import Feedback from './pages/Feedback';
import Layout from './Layout/Layout';
import Otp from './pages/Otp';

function App() {
  return (

  
      <Routes>
        
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/registration" element={<Registrations />}></Route>
          <Route exact path="/home" element={<Layout> <Home /></Layout>}></Route>
          <Route exact path="/reg" element={<Registrations />}></Route>
          <Route exact path="/forgotpassword" element={ <ForgotPassword />}></Route>
          <Route exact path="/otp" element={ <Otp />}></Route>
          <Route exact path="/resetpassword/:token" element={ <ResetPassword />}></Route>
          <Route exact path="/confirmpassword/:token" element={ <ConfirmPassword />}></Route>
          <Route exact path="/addticket" element={ <Layout> <AddTicket /></Layout>}></Route>
          <Route exact path="/alltickets" element={<Layout> <AllTickets /></Layout>}></Route>
          <Route exact path="/feedback/:id" element={<Layout> <Feedback /></Layout>}></Route>
          <Route exact path="/ticketdetail/:id" element={<Layout> <TicketDetail /></Layout>}></Route>
        
      </Routes>
    
  );
}

export default App;
