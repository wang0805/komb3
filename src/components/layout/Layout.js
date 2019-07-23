import React, { Fragment } from "react";

const Layout = props => (
  <Fragment>
    <div>toolbar, sidedrawer</div>
    <main>{props.children}</main>
  </Fragment>
);

export default Layout;
