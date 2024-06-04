import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Forms() {
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /[^A-Za-z0-9]/,
          "Password must contain at least one special character"
        ),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values, e) => {
      //   e.preventDefault();
      console.log(values);
    },
  });
  return (
    <div className="formClass">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <p className="error">{formik.errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <p className="error">{formik.errors.password}</p>
        )}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && (
          <p className="error">{formik.errors.confirmPassword}</p>
        )}
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && (
          <p className="error">{formik.errors.address}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
