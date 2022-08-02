import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGlobalStore } from "./hooks/useGlobal";
import Login from "./modules/public/auth/login/Login";
import Register from "./modules/public/auth/register/Register";
// import AppRoutes from "./routes";

function App() {
  // const { testSaga } = useGlobalStore();
  // useEffect(() => {
  //   testSaga();
  // }, []);
  return (
    <React.Fragment>
      <Login />
      <Register />
    </React.Fragment>
  );
}

export default App;
