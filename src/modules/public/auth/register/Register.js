import React from "react";
import "../../../../assets/styles/Auth.scss";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Typography } from "antd";
import { MailTwoTone, UserOutlined } from "@ant-design/icons";

const { Link } = Typography;

export default function Register() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Tối thiểu 2 ký tự")
        .max(25, "Tối đa 25 ký tự")
        .required("Bắt buộc điền vào họ và tên"),
      email: Yup.string()
        .email("Định dạng email không chính xác")
        .required("Bắt buộc điền vào email!"),
      password: Yup.string()
        .min(6, "Tối thiểu 6 ký tự")
        .required("Bắt buộc điền vào mật khẩu"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp")
        .required("Bắt buộc điền vào mật khẩu"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="auth">
      <h1>Đăng ký tài khoản</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-item">
          <label>Họ và tên</label>
          <Input
            prefix={<UserOutlined />}
            allowClear
            className="input"
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.full_name}</p>
          )}
        </div>
        <div className="form-item">
          <label>Email</label>
          <Input
            prefix={<MailTwoTone />}
            allowClear
            className="input"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div className="form-item">
          <label>Mật khẩu</label>
          <Input.Password
            allowClear
            className="input"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div className="form-item">
          <label>Nhập lại mật khẩu</label>
          <Input.Password
            className="input"
            allowClear
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors.confirm_password &&
            formik.touched.confirm_password && (
              <p>{formik.errors.confirm_password}</p>
            )}
        </div>
        <div className="submit-item">
          <button className="submit-button" type="submit">
            Đăng ký
          </button>
        </div>
        <div className="link">
          Đã có tài khoản <Link>đăng nhập ngay</Link>
        </div>
      </form>
    </div>
  );
}
