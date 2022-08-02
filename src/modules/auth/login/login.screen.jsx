import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import * as yup from "yup";
import "../../../assets/styles/Login.scss";
import { Input, Typography } from "antd";
const { Link } = Typography;

const schema = (t) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t("right_email", { ns: "common" }))
      .required(t("field_required", { ns: "common" }))
      .max(50, t("max_length", { ns: "common" }) + "50"),
    password: yup
      .string()
      .min(8, t("min_length", { ns: "common" }) + "8")
      .max(16, t("max_length", { ns: "common" }) + "16")
      .required(t("field_required", { ns: "common" })),
  });

function LoginScreen() {
  const { t } = useTranslation(["common"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(t)),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
  };
  return (
    <div className="form-container">
      <h1>{t("login", { ns: "common" })}</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-item">
          <label>Email</label>
          <input
            {...register("email")}
            placeholder={t("enter_email", { ns: "common" }) + "..."}
            // type="email"
            // required
          />
          {/* {errors.email && <p>{t(errors.email, { ns: "common" })}</p>} */}
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-item">
          <label>{t("password", { ns: "common" })}</label>
          <input
            {...register("password")}
            placeholder={t("enter_password", { ns: "common" }) + "..."}
            type="password"
            // required
          />
          <p>{errors.password?.message}</p>
        </div>

        <div className="submit-item">
          <button className="submit-button" type="submit">
            {t("login", { ns: "common" })}
          </button>
        </div>
        <div className="link">
          Chưa có tài khoản?{" "}
          <Link className="link-navigate">
            {t("register_now", { ns: "common" })}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
