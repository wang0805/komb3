import React, { Fragment, Component } from "react";

import classes from "./layout.module.css"; //have to add the .module.
import Toolbar from "../navigation/toolbar";
import SideDrawer from "../navigation/sidedrawer/sidedrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggle = () => {
    // do not use this -> this.setState({ showSideDrawer: !this.state.showSideDrawer });
    // clean way to display the state according to the prevState
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar toggleClicked={this.sideDrawerToggle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
