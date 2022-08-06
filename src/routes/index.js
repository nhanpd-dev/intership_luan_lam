import React from "react";
import { useRoutes } from "react-router-dom";

import _privateRoutes from "./components/_privateNavigator";
import _publicRoutes from "./components/_publicNavigator";

function AppRoutes() {
  const PrivateRoute = useRoutes(_privateRoutes);
  const PublicRoute = useRoutes(_publicRoutes);
  return (
    <>
      {PublicRoute}
      {PrivateRoute}
    </>
  );
}
export default AppRoutes;
