import React from 'react'
// import { Navigate } from 'react-router';
// import { Redirect } from 'react-router-dom';
import Addticket from "./pages/Addticket";
// import {BrowserRouter as Redirect,Router,Navigate,Route, Routes } from "react-router-dom"
import Allticket from "./pages/Allticket";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Ticketdetail from "./pages/Ticketdetail";
import Subcategory from "./pages/Subcategory";
import Title from "./pages/Title";
import Department from "./pages/Department";
import Category from "./pages/Category";
import { BrowserRouter as Redirect, Route, Routes } from "react-router-dom";
import Adminlogin from './pages/Adminlogin';
import Editticket from './pages/Editticket';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ConfirmPassword from './pages/ConfirmPassword';

const CustomRoute = () => {

  return (
    <Routes>

      <Route
        path="/"
        element={
          <PublicRoute >
            <Adminlogin />
          </PublicRoute>
        }
      />

      <Route
        path="/resetpassword/:token/:id"
        element={
          <PublicRoute >
            <ResetPassword />
          </PublicRoute>
        }
      />

      <Route
        path="/confirmpassword/:token/:id"
        element={
          <PublicRoute >
            < ConfirmPassword/>
          </PublicRoute>
        }
      />

      <Route
        path="/forgotpassword/"
        element={
          <PublicRoute >
            <ForgotPassword />
          </PublicRoute>
        }
      />

      <Route
        path="/addticket"
        element={
          <PrivateRoute >
            < Addticket />
          </PrivateRoute>
        }
      />
      <Route
        path="/Dashboard"
        element={
          <PrivateRoute >
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/Category"
        element={
          <PrivateRoute >
            <Category />
          </PrivateRoute>
        }
      />
      <Route
        path="/Subcategory"
        element={
          <PrivateRoute >
            <Subcategory />
          </PrivateRoute>
        }
      />
      <Route
        path="/Title"
        element={
          <PrivateRoute >
            <Title />
          </PrivateRoute>
        }
      />
      <Route
        path="/Department"
        element={
          <PrivateRoute >
            <Department />
          </PrivateRoute>
        }
      />

      <Route
        path="/allticket"
        element={
          <PrivateRoute >
            <Allticket />
          </PrivateRoute>
        }
      />

      {/* <Route
        path="/Editticket/:id"
        element={
          <PrivateRoute >
            <Editticket />
          </PrivateRoute>
        }
      /> */}
      <Route path='/menu' element={<Menu />} />
      <Route
        path="/ticketdetail/:id"
        element={
          <PrivateRoute >
            <Ticketdetail />
          </PrivateRoute>
        }
      />
      <Route path='/Allticket/editticket/:id' element={<Editticket />} />

    </Routes>
  )


}

export default CustomRoute
