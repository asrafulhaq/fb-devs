import Cookie from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoggedInRoute = () => {
  const { loginState } = useSelector((state) => state.auth);
  if (Cookie.get("authToken")) {
    return loginState ? <Outlet /> : <Navigate to="/login" />;
  } else {
    return <Navigate to="/" />;
  }
};

// export
export default LoggedInRoute;
