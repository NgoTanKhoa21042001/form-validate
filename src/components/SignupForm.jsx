import React from "react";
import { useState } from "react";
// Yup dùng để xác thực initialValue khi nhập vào
import * as Yup from "yup";
import { useFormik } from "formik";
import "./SIgnupForm.css";
const SignupForm = () => {
  // tương tự như tạo useState
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    //    Validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      // dựa trên thằng password
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      console.log(values);
    },
  });

  return (
    <section>
      <h1>Emmmmmmmmmm</h1>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label>Email address:</label>
        <input
          type="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          placeholder="Enter your email..."
        />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}
        <label>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password..."
        />
        {formik.errors.password && (
          <p className="errorMsg">{formik.errors.password}</p>
        )}
        <label>Confirmed Password:</label>
        <input
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Enter your password again..."
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg">{formik.errors.confirmedPassword}</p>
        )}

        <label>Phone number :</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone..."
        />
        {formik.errors.phone && (
          <p className="errorMsg">{formik.errors.phone}</p>
        )}
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default SignupForm;
