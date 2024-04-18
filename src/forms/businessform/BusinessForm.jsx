import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../businessform/BusinessForm.css";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";

export default function BusinessForm() {
  var formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      businessname: "",
      fieldname: "",
      mobile: "",
      budget: "",
      address: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Mandatory Field!"),
      email: Yup.string().required("Email required!"),
      businessname: Yup.string().required("Mandatory Field!"),
      fieldname: Yup.string().required("Mandatory Field!"),
      mobile: Yup.string()
        .min(10, "Should be 10 digits!")
        .max(10, "10 digits only!")
        .matches(/^[6-9]\d{9}$/, "Invalid mobile number!")
        .required("A phone number is required!"),
      budget: Yup.number().required("Mandatory Field!"),
      address: Yup.string().required("Mandatory Field!"),
    }),
    onSubmit: (values) => {
      setSubmitted(true);
      console.log(values);
    },
  });

  return (
    <>
      <div className="page-container">
        <Navbar />
        <motion.div
          className="bm-glass"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="bm-title">Business Form</h1>
          <form
            onSubmit={(e) => {
              formik.handleSubmit(e);
            }}
            className="bm-form"
          >
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  className="bm-input"
                  type="text"
                  placeholder="Enter your full name"
                  {...formik.getFieldProps("fullname")}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="error-message">{formik.errors.fullname}</div>
                ) : null}
              </div>

              <div className="input-box">
                <span className="details">Email</span>
                <input
                  className="bm-input"
                  type="email"
                  placeholder="Enter your email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="input-box">
                <span className="details">Business Name</span>
                <input
                  className="bm-input"
                  type="text"
                  placeholder="Enter your business name"
                  {...formik.getFieldProps("businessname")}
                />
                {formik.touched.businessname && formik.errors.businessname ? (
                  <div className="error-message">
                    {formik.errors.businessname}
                  </div>
                ) : null}
              </div>
              <div className="input-box">
                <span className="details">Field Name</span>
                <input
                  className="bm-input"
                  type="text"
                  placeholder="Ex : Medical"
                  {...formik.getFieldProps("fieldname")}
                />
                {formik.touched.fieldname && formik.errors.fieldname ? (
                  <div className="error-message">{formik.errors.fieldname}</div>
                ) : null}
              </div>
              <div className="input-box">
                <span className="details">Mobile</span>
                <input
                  className="bm-input"
                  type="number"
                  placeholder="Enter your mobile number"
                  {...formik.getFieldProps("mobile")}
                />

                <div className="error-message">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
              </div>
              <div className="input-box">
                <span className="details">Estimated Budget</span>
                <input
                  className="bm-input"
                  type="number"
                  placeholder="Ex: 20000"
                  {...formik.getFieldProps("budget")}
                />
                {formik.touched.budget && formik.errors.budget ? (
                  <div className="error-message">{formik.errors.budget}</div>
                ) : null}
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  className="bm-input"
                  type="text"
                  placeholder="Enter your full address"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="error-message">{formik.errors.address}</div>
                ) : null}
              </div>
            </div>
            <div className="bm-btns">
              <motion.button type="submit" className="sub-btn">
                Submit
              </motion.button>
              <motion.button type="reset" className="res-btn">
                Reset
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
