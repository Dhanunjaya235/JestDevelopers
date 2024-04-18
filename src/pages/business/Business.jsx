import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../business/Business.css";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

const Business = () => {
  const [clicked, setClicked] = useState(false);
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
  const handleBackClick = () => {
    setClicked(false);
  };
  return (
    <>
      {!clicked ? (
        <motion.div className="main-b-div">
          <Navbar />
          <motion.h1
            className="b-title"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: "1", delay: "0.2" }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="b-card-main"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: "1.2" }}
          >
            <motion.div
              className="b-card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                className="b-img"
                src="src\pages\Business\mobile.png"
                alt="Mobile App Development"
              />
              <h1 className="b-card-title">
                <span className="b-card-text-first-letter">M</span>obile App
                Development
              </h1>
              <p className="b-card-text">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </motion.div>
            <motion.div
              className="b-card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                className="b-img"
                src="src\pages\Business\web.png"
                alt="Mobile App Development"
              />
              <h1 className="b-card-title">
                <span className="b-card-text-first-letter">W</span>eb Design &
                Development
              </h1>
              <p className="b-card-text">
                In the digital age, a website's the key, An extension of your
                marketing spree. Showcasing products with flair and might,
                Bringing your business to customers' sight.
              </p>
            </motion.div>
            <motion.div
              className="b-card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                className="b-img"
                src="src\pages\Business\software.png"
                alt="Mobile App Development"
              />
              <h1 className="b-card-title">
                <span className="b-card-text-first-letter">S</span>oftware
                Testing Services
              </h1>
              <p className="b-card-text">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="b-form"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: "1", delay: "0.2" }}
          >
            <p>
              "After reviewing our services, if you'd like to proceed, please
              take a moment to fill out the form below."
            </p>
            <Link
              className="b-btn-link"
              onClick={() => {
                setClicked(true);
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      ) : (
        <div className="page-container">
          <Navbar />
          <motion.div
            className="bm-glass"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <AiOutlineCloseSquare
              onClick={() => handleBackClick()}
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
              }}
            />
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
                    <div className="error-message">
                      {formik.errors.fullname}
                    </div>
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
                    <div className="error-message">
                      {formik.errors.fieldname}
                    </div>
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
      )}
    </>
  );
};

export default Business;
