import React from "react";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import schema from "./schema";
import { Container, FormItem, Background, Img } from "./styled";
import shoping from "../../../assets/img/shoping.jpg";
import dowload from "../../../assets/img/dowload.png";
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
      <Img>
        <img className="img-register" src={shoping} />
      </Img>
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
              type="text"
              required
              {...register("full_name")}
            />
          </FormItem>
          <p className="errors-message">{errors.full_name?.message}</p>

          <FormItem>
            <label className="label-item">{t("common:sex")}</label>
            <select
              id="country"
              name="country"
              className="input-item select-form"
              {...register("sex")}
            >
              <option value="1"> {t("common:male")}</option>
              <option value="0"> {t("common:female")}</option>
            </select>
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
              <Link className="link-ref" to="/login">
                {t("login_now")}
              </Link>
            </div>
          </FormItem>
        </form>
      </Container>
    </Background>
  );
}
export default RegisterScreen;
