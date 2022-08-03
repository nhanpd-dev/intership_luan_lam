import React from "react";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import schema from "./schema";
import { Container, FormItem, Background } from "./styled";

function RegisterScreen() {
  const { t } = useTranslation(["register", "common"]);
  const navigate = useNavigate();
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
    <Background>
      <Container>
        <h1 className="title">{t("common:signup")}</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <FormItem>
            <label htmlFor="full_name" className="label-item">
              {t("common:name")}
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
              <label className="label-item">{t("common:sex")}</label>

              <label htmlFor="female" className="label-item">
                {t("common:female")}

                <input
                  className="input-item radio-item"
                  type="radio"
                  value="0"
                  required
                  name="sex"
                  id="female"
                  {...register("sex")}
                />
              </label>

              <label htmlFor="male" className="label-item ">
                {t("common:male")}

                <input
                  className="input-item radio-item"
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
              {t("common:date")}
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
              {t("common:email")}
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
              {t("common:phone")}
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
              {t("common:password")}
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
            {t("common:signup")}
          </button>
          <FormItem>
            <div className="link">
              {t("already_account")}
              <a
                className="link-ref"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {t("login_now")}
              </a>
            </div>
          </FormItem>
        </form>
      </Container>
    </Background>
  );
}
export default RegisterScreen;
