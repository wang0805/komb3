import React, { Fragment } from "react";
import classes from "./layout.module.css"; //have to add the .module.

const layout = props => (
  <Fragment>
    <div>toolbar, sidedrawer</div>
    <main className={classes.content}>{props.children}</main>
  </Fragment>
);

export default layout;
