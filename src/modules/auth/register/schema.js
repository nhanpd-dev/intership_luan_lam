import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = (t) => {
  return yup.object().shape({
    full_name: yup
      .string()
      .min(6, t("name_err_min"))
      .max(30, t("name_err_max"))
      .required(t("name_required")),
    sex: yup.string().required(t("sex")),

    email: yup
      .string()
      .email(t("email_format_err"))
      .max(50, t("email_err_max"))
      .required(t("email_err_required")),
    phone: yup
      .string()
      .matches(phoneRegExp, t("not_phone_number_err"))
      .length(11, t("phone_err_length"))
      .required(t("phone_required")),
    password: yup
      .string()
      .max(16, t("password_max"))
      .min(8, t("password_err_min")),
  });
};
export default schema;
