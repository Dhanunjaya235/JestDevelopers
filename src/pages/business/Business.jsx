import React from "react";
import { Link } from "react-router-dom";
import "../business/Business.css";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";

const Business = () => {
  return (
    <>
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
              <span className="b-card-text-first-letter">S</span>oftware Testing
              Services
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
            "After reviewing our services, if you'd like to proceed, please take
            a moment to fill out the form below."
          </p>
          <Link to="/businessform" className="b-btn-link">
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Business;
