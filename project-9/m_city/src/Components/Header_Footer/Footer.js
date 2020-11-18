import React from "react";
import { CityLogo } from "../ui/icons";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo link={true} linkTo="/" width="70px" height="70px" />
      </div>
      <div className="footer_discl">
        Machester City 2020. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
