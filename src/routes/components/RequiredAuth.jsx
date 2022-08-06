import { useEffect, useState } from "react";
import { changeLanguage } from "i18next";

import { Outlet, Navigate } from "react-router-dom";
const Authenticated = true;

const RequiredAuth = ({ children }) => {
  if (!Authenticated) {
    console.log("required auth");
    return <Navigate to="login" replace={true} />;
  }
  return children;
};
export default RequiredAuth;
