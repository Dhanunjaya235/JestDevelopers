import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "../student/Student.css";
import { motion } from "framer-motion";

const Student = () => {
  return (
    <>
      <div className="main-s-div">
        <Navbar />
        <motion.h1
          className="s-title"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: "1", delay: "0.2" }}
        >
          Our Services
        </motion.h1>
        <motion.div
          className="s-card-main"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: "1.2" }}
        >
          <motion.div
            className="s-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="s-card-title">
              <span className="s-card-text-first-letter">I</span>nternship
            </h1>
            <p className="s-card-text">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </p>
          </motion.div>
          <motion.div
            className="s-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="s-card-title">
              <span className="s-card-text-first-letter">F</span>reelancing
            </h1>
            <p className="s-card-text">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </p>
          </motion.div>
          <motion.div
            className="s-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="s-card-title">
              <span className="s-card-text-first-letter">W</span>hy join us?
            </h1>
            <p className="s-card-text">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="s-form"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: "1", delay: "0.2" }}
        >
          <p>
            "After reviewing our services, if you'd like to proceed, please take
            a moment to fill out the form below."
          </p>
          <Link to="/studentform" className="s-btn-link">
            Form
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Student;
