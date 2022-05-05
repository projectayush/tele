import React, { useContext } from 'react';
import { BrowserRouter as Redirect, Route, Navigate } from "react-router-dom"
import userContext from '../Store/userContext';

const PublicRoute = ({ children }) => {

  const userctx = useContext(userContext);
  let isLogged = userctx.isLoggedIn();
  if (isLogged) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;