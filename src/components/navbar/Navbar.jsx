import React, { useState } from "react";
import "../navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false);
  };
  return (
    <>
      <motion.div
        className="a-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: "1", delay: "0.2" }}
      >
        <nav
          className={`nav ${isNavOpen ? "openNav" : ""} ${
            isSearchOpen ? "openSearch" : ""
          }`}
        >
          <i className="uil uil-bars navOpenBtn" onClick={toggleNav}></i>
          <a href="#" className="logo">
            <img
              src="src\components\navbar\logo.png"
              alt="Logo"
              className="logo"
            />
          </a>

          <ul className="nav-links">
            <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/business" activeClassName="active">
                Business
              </NavLink>
            </li>
            <li>
              <NavLink to="/student" activeClassName="active">
                Student
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">
                Blogs
              </NavLink>
            </li>
          </ul>

          <i
            className="uil uil-search search-icon"
            id="searchIcon"
            onClick={toggleSearch}
          ></i>
          <div className="search-box">
            <i
              className="uil uil-search search-icon"
              onClick={toggleSearch}
            ></i>
            <input type="text" placeholder="Search here..." />
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
