import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import schema from "./schema";
import { Container, FormItem, Form, SubmitItem } from "./styled";

const { Link } = Typography;

function LoginScreen() {
  const { t } = useTranslation(["login", "common"]);
  const navigate = useNavigate();

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

  const onClickLink = () => {
    navigate("/register");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className="form-title">{t("common:login")}</h1>
        <FormItem>
          <label className="form-label">{t("common:email")}</label>
          <input
            className="form-input"
            placeholder={t("login:enter_email")}
            {...register("email")}
          />
          <p className="error-message">{errors.email?.message}</p>
        </FormItem>
        <FormItem>
          <label className="form-label">{t("common:password")}</label>
          <input
            className="form-input"
            placeholder={t("login:enter_password")}
            type="password"
            {...register("password")}
          />
          <p className="error-message">{errors.password?.message}</p>
        </FormItem>

        <SubmitItem className="submit-item">
          <button className="submit-button" type="submit">
            {t("common:login")}
          </button>
        </SubmitItem>
        <div className="link">
          {t("login:no_account")}
          <Link className="link-navigate" onClick={onClickLink}>
            {t("login:register_now")}
          </Link>
        </div>
      </Form>
    </Container>
  );
}

export default LoginScreen;
