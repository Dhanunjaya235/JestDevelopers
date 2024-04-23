import React from "react";
import "../business/Business.css";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Business = () => {
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
      city: Yup.string().required("Mandatory Field!"),
      pincode: Yup.string()
        .min(6, "Should be 6 digits!")
        .max(6, "6 digits only!")
        .matches(/^[6-9]\d{9}$/, "Invalid Pincode!")
        .required("Pincode is required!"),
    }),
    onSubmit: (values) => {
      setSubmitted(true);
      console.log(values);
    },
  });

  return (
    <>
      <motion.div className="main-b-div">
        <Navbar />
        <Box>
          <motion.h1
            className="b-title"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: "1", delay: "0.2" }}
          >
            Our Services
          </motion.h1>
        </Box>
        <motion.div
          className="b-card-main"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: "1.2" }}
        >
          <Grid
            container
            justifyContent={"center"}
            display={"flex"}
            rowGap={3}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Grid
              item
              justifyContent={"center"}
              display={"flex"}
              xs={10}
              sm={12}
              md={6}
              lg={4}
              xl={4}
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
            </Grid>
            <Grid
              item
              justifyContent={"center"}
              display={"flex"}
              xs={10}
              sm={12}
              md={6}
              lg={4}
              xl={4}
            >
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
            </Grid>
            <Grid
              item
              justifyContent={"center"}
              display={"flex"}
              xs={10}
              sm={12}
              md={6}
              lg={4}
              xl={4}
            >
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
            </Grid>
          </Grid>
        </motion.div>

        <motion.div
          className="b-form"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: "1", delay: "0.2" }}
        >
          <Typography textAlign={"center"} ml={5} mr={5}>
            "After reviewing our services, if you'd like to proceed, please take
            a moment to fill out the form below."
          </Typography>
        </motion.div>
      </motion.div>

      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        component={"h1"}
        m={2}
        fontSize={"24px"}
        sx={{ color: "red" }}
      >
        Contact US
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={5}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        mb={5}
      >
        <Grid item xs={10} sm={5}>
          <TextField
            label="Full Name"
            variant="outlined"
            {...formik.getFieldProps("fullname")}
            fullWidth
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <FormHelperText error={true}>
              {formik.errors.fullname}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="Email"
            variant="outlined"
            {...formik.getFieldProps("email")}
            fullWidth
          />
          {formik.touched.email && formik.errors.email && (
            <FormHelperText error={true}>{formik.errors.email}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="Business Name"
            variant="outlined"
            {...formik.getFieldProps("businessname")}
            fullWidth
          />
          {formik.touched.businessname && formik.errors.businessname && (
            <FormHelperText error={true}>
              {formik.errors.businessname}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="Field Name"
            variant="outlined"
            {...formik.getFieldProps("fieldname")}
            fullWidth
          />
          {formik.touched.fieldname && formik.errors.fieldname && (
            <FormHelperText error={true}>
              {formik.errors.fieldname}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="Mobile"
            variant="outlined"
            {...formik.getFieldProps("mobile")}
            fullWidth
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <FormHelperText error={true}>{formik.errors.mobile}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="Budget"
            variant="outlined"
            {...formik.getFieldProps("budget")}
            fullWidth
          />
          {formik.touched.budget && formik.errors.budget && (
            <FormHelperText error={true}>{formik.errors.budget}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="City"
            variant="outlined"
            {...formik.getFieldProps("city")}
            fullWidth
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <FormHelperText error={true}>{formik.errors.mobile}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="Pincode"
            variant="outlined"
            {...formik.getFieldProps("pincode")}
            fullWidth
          />
          {formik.touched.budget && formik.errors.budget && (
            <FormHelperText error={true}>{formik.errors.budget}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={10}>
          <Grid container justifyContent={"flex-end"} spacing={6}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  //Handle The API call of the values using formik.values object
                }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="error">
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Business;
