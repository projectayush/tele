import React, { useContext } from 'react';
import { BrowserRouter as Redirect, Route, Navigate } from "react-router-dom"
import userContext from '../Store/userContext';

const PrivateRoute = ({ children }) => {

  const userctx = useContext(userContext);
  let isLogged = userctx.isLoggedIn();
  if (!isLogged) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;