import { Outlet, Navigate } from "react-router-dom";

import LoginScreen from "../../modules/auth/login/login.screen";
import RegisterScreen from "../../modules/auth/register/register.screen";
import NotFound from "../../modules/notFound/notFound.screen";
import PublicLayout from "./PublicLayout";

import HomeScreen from "./pageDemo/HomeScreen.demo";
const _publicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      { path: "/login", element: <LoginScreen /> },
      { path: "/register", element: <RegisterScreen /> },
      { element: <NotFound />, path: "*" },
    ],
  },
];
export default _publicRoutes;
