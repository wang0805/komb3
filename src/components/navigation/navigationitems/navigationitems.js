import React from "react";

import classes from "./navigationItems.module.css";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        KomBuilder
      </a>
    </li>
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        Checkout
      </a>
    </li>
  </ul>
);

export default navigationItems;
