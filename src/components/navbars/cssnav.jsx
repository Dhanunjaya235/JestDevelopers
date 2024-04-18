import React, { useState } from "react";
import "./cssnav.css"; // Assuming you have a CSS file with the provided styles
import { Button } from "@mui/material";

function Topnav() {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive((prevState) => !prevState);
  };

  return (
    <div className={`topnav ${isResponsive ? "responsive" : ""}`}>
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      {/* <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
        <i className="fa fa-bars"></i>
      </a> */}

      <Button onClick={toggleResponsive}>Close</Button>
    </div>
  );
}

function CssNav() {
  return (
    <div>
      <Topnav />
      {/* <div style={{ paddingLeft: "16px" }}>
        <h2>Responsive Topnav Example</h2>
        <p>Resize the browser window to see how it works.</p>
      </div> */}
    </div>
  );
}

export default CssNav;
