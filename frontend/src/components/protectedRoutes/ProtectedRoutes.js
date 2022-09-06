import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isLogged }) => {
  if (isLogged) {
    return <Outlet />;
  } else {
    return <Navigate to="/register" />;
  }
};

export default ProtectedRoutes;
