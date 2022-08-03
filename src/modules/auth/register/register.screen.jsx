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
          <label htmlFor="full_name" className="label-item">
            {t("name")}
          </label>

          <input
            className="input-item"
            id="full_name"
            name="full_name"
            required
            {...register("full_name")}
          />
        </FormItem>
        <p className="errors-message">{errors.full_name?.message}</p>

        <FormItem>
          <div className="group-button">
            <label className="label-item">{t("sex")}</label>

            <label htmlFor="female" className="label-item">
              {t("female")}

              <input
                className="input-item"
                type="radio"
                value="0"
                required
                name="sex"
                id="female"
                {...register("sex")}
              />
            </label>

            <label htmlFor="male" className="label-item">
              {t("male")}

              <input
                className="input-item"
                type="radio"
                value="1"
                required
                name="sex"
                id="male"
                {...register("sex")}
              />
            </label>
          </div>
        </FormItem>
        <p className="errors-message">{errors.sex?.message}</p>

        <FormItem>
          <label htmlFor="date" className="label-item">
            {" "}
            {t("date")}
          </label>

          <input
            className="input-item"
            type="date"
            name="date"
            id="date"
            {...register("date")}
          />
        </FormItem>
        <p className="errors-message">{errors.date?.message}</p>

        <FormItem>
          <label htmlFor="email" className="label-item">
            {t("email")}
          </label>

          <input
            className="input-item"
            type="email"
            name="email"
            id="email"
            {...register("email")}
          />
        </FormItem>
        <p className="errors-message">{errors.email?.message}</p>

        <FormItem>
          <label htmlFor="phone" className="label-item">
            {t("phone")}
          </label>

          <input
            className="input-item"
            type="tel"
            name="phone"
            id="phone"
            {...register("phone")}
          />
        </FormItem>
        <p className="errors-message">{errors.phone?.message}</p>

        <FormItem>
          <label htmlFor="password" className="label-item">
            {t("password")}
          </label>

          <input
            className="input-item"
            type="password"
            name="password"
            id="pasword"
            {...register("password")}
          />
        </FormItem>
        <p className="errors-message">{errors.password?.message}</p>

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
