import React from "react";

import burLogo from "../../assets/images/burger-logo.png";
import classes from "./logo.module.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burLogo} alt="logo" />
  </div>
);

export default logo;
