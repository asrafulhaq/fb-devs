import Cookie from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoggedOutRoute = () => {
  const { loginState } = useSelector((state) => state.auth);

  if (Cookie.get("authToken")) {
    return loginState ? <Navigate to="/" /> : <Outlet />;
  } else {
    return <Outlet />;
  }
};

// export
export default LoggedOutRoute;
