import React from "react";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Container, FormItem } from "./styled";
import schema from "./schema";

function RegisterScreen() {
  const { t } = useTranslation(["register"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      full_name: "",
      sex: "1",
      date: null,
      email: "",
      phone: "",
      password: "",
    },
    resolver: yupResolver(schema(t)),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <Container>
      <h2 className="title">{t("signup")}</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormItem>
          <label>{t("name")}</label>
          <input
            {...register("full_name")}
            // placeholder="nhap ho ten"
            name="full_name"
            required
          />
        </FormItem>
        <p className="errors-message">{errors.full_name?.message}</p>

        <FormItem>
          <div className="group-button">
            <label>{t("sex")}</label>

            <label>
              {t("female")}
              <input
                className="radio-button-0"
                {...register("sex")}
                type="radio"
                value="0"
                required
                name="sex"
              ></input>
            </label>

            <label>
              {t("male")}
              <input
                className="radio-button-1"
                {...register("sex")}
                type="radio"
                value="1"
                required
                name="sex"
              ></input>
            </label>
          </div>
        </FormItem>
        <p>{errors.sex?.message}</p>

        <FormItem>
          <label> {t("date")}</label>

          <input {...register("date")} type="date" name="date" />
        </FormItem>
        <p>{errors.date?.message}</p>

        <FormItem>
          <label>{t("email")}</label>

          <input {...register("email")} type="email" name="email" />
        </FormItem>
        <p>{errors.email?.message}</p>

        <FormItem>
          <label> {t("phone")}</label>

          <input {...register("phone")} type="tel" name="phone" />
        </FormItem>
        <p>{errors.phone?.message}</p>

        <FormItem>
          <label> {t("password")}</label>

          <input {...register("password")} type="password" name="password" />
        </FormItem>
        <p>{errors.password?.message}</p>
        <button type="submit" className="submit-button">
          {t("signup")}
        </button>
        <FormItem>
          <div className="link">
            {t("already_account")}
            <a className="link-ref">{t("login_now")}</a>
          </div>
        </FormItem>
      </form>
    </Container>
  );
}
export default RegisterScreen;
