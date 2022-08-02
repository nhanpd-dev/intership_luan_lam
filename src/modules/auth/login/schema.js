import * as yup from "yup";

const schema = (t) =>
  yup.object().shape({
    email: yup
      .string()
      .required(t("field_required", { ns: "login" }))
      .email(t("right_email", { ns: "login" }))
      .max(50, t("max_length", { ns: "login", max: 50 })),
    password: yup
      .string()
      .required(t("field_required", { ns: "login" }))
      .min(8, t("min_length", { ns: "login", min: 8 }))
      .max(16, t("max_length", { ns: "login", max: 16 })),
  });

export default schema;
