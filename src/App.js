import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGlobalStore } from "./hooks/useGlobal";
import LoginScreen from "./modules/auth/login/login.screen";
import AppRoutes from "./routes";

function App() {
  // const { testSaga } = useGlobalStore();
  // useEffect(() => {
  //   testSaga();
  // }, []);
  // return <AppRoutes />
  return <LoginScreen />;
}

export default App;
