import React from "react";
import "../navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <>
      <motion.div
        className="a-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: "1", delay: "0.2" }}
      >
        <img src="src\components\navbar\logo.png" alt="Logo" className="logo" />
        <div className="a-child-container">
          <ul>
            <li>
              <NavLink to="/" className="a-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="a-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/business" className="a-link">
                Business
              </NavLink>
            </li>
            <li>
              <NavLink to="/student" className="a-link">
                Student
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="a-link">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
