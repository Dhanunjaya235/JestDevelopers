import "../hero/Hero.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="something">
        <Navbar />
        <div className="text-content">
          <motion.span
            className="welcome-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "1", delay: "0.5" }}
          >
            Welcome to Jest Developers
          </motion.span>
          <motion.h1
            className="title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "1", delay: "1" }}
          >
            Digitalizing Local Bharat
          </motion.h1>
          <motion.p
            className="text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "1", delay: "1.5" }}
          >
            Building a community of developers to build digital India
          </motion.p>
        </div>
        <motion.div
          className="btns"
          initial={{ y: 50, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: "1", delay: "2" }}
        >
          <Link className="contained">Explore Now</Link>
          <Link className="outlined">Blog</Link>
        </motion.div>
        <div className="base-text">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "1.2", delay: "2.5" }}
          >
            Empowering Developers, Transforming India Digitally! Join us as we
            unite talents, foster collaboration, and innovate towards a
            digitally empowered nation. Together, let's code the future of
            India, one breakthrough at a time!
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Hero;
