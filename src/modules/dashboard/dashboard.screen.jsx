import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../../components";
function DashboardScreen() {
  const { t } = useTranslation(["common"]);
  const navigate = useNavigate();
  const onNavigate = () => navigate("dashboard/login");
  return (
    <div>
      Navigate
      <PrimaryButton onClick={onNavigate} title={t("login")} />
      <Outlet />
    </div>
  );
}

export default DashboardScreen;
