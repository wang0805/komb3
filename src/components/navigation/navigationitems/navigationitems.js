import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navigationItems.module.css";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink exact activeClassName={classes.active} to="/">
        KomBuilder
      </NavLink>
    </li>
    <li className={classes.NavigationItem}>
      <NavLink activeClassName={classes.active} to="/orders">
        Orders
      </NavLink>
    </li>
  </ul>
);

export default navigationItems;
