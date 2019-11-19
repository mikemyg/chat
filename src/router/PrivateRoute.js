import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../context/auth";
import Login from "../pages/login/Login";

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={props => (isLoggedIn ? <Component {...props} /> : <Login />)}
    />
  );
}

export default PrivateRoute;
