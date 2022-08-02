import * as yup from "yup";

const schema = (t) =>
  yup.object().shape({
    email: yup
      .string()
      .required(t("login:validation.field_required"))
      .email(t("login:validation.right_email"))
      .max(50, t("login:validation.max_length", { max: 50 })),
    password: yup
      .string()
      .required(t("login:validation.field_required"))
      .min(8, t("login:validation.min_length", { min: 8 }))
      .max(16, t("login:validation.max_length", { max: 16 })),
  });

export default schema;
