import React from "react";

import classes from "./toolbar.module.css";
import Logo from "../../components/logo/logo";
import Toggle from "../navigation/sidedrawer/toggle/toggle";
import NavigationItems from "../navigation/navigationitems/navigationitems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Toggle clicked={props.toggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.Desktop}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
