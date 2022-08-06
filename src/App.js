import React from "react";
import AppRoutes from "./routes";
import { BrowserRouter, Routes } from "react-router-dom";
import RegisterScreen from "./modules/auth/register/register.screen";
function App() {
  return (
    // <RegisterScreen />
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <RegisterScreen />
    </BrowserRouter>
  );
}

export default App;
