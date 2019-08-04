import React, { Fragment } from "react";

import Logo from "../../logo/logo";
import NavigationItems from "../navigationitems/navigationitems";
import Backdrop from "../../ui/backdrop/backdrop";
import classes from "./sidedrawer.module.css";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Fragment>
  );
};

export default sideDrawer;
