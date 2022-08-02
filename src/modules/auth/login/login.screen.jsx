import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { Input, Typography } from "antd";
import { Container, FormItem, Form, SubmitItem } from "./styled";
import schema from "./schema";

const { Link } = Typography;

function LoginScreen() {
  const { t } = useTranslation(["login", "common"]);

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
    <Container>
      <h1 className="form-title">{t("login", { ns: "common" })}</h1>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormItem>
          <label className="form-label">{t("email", { ns: "common" })}</label>
          <input
            className="form-input"
            placeholder={t("enter_email", { ns: "login" })}
            {...register("email")}
          />
          <p className="error-message">{errors.email?.message}</p>
        </FormItem>
        <FormItem>
          <label className="form-label">
            {t("password", { ns: "common" })}
          </label>
          <input
            className="form-input"
            placeholder={t("enter_password", { ns: "login" })}
            type="password"
            {...register("password")}
          />
          <p className="error-message">{errors.password?.message}</p>
        </FormItem>

        <SubmitItem className="submit-item">
          <button className="submit-button" type="submit">
            {t("login", { ns: "common" })}
          </button>
        </SubmitItem>
        <div className="link">
          {t("no_account", { ns: "login" })}
          <Link className="link-navigate">
            {t("register_now", { ns: "login" })}
          </Link>
        </div>
      </Form>
    </Container>
  );
}

export default LoginScreen;
