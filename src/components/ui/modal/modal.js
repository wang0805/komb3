import React, { Fragment, Component } from "react";

import classes from "./modal.module.css";
import Backdrop from "../backdrop/backdrop";

class Modal extends Component {
  //so ordersummary doesn't render each time summary is updated; to improve performance
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) return true;
    else return false;
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClose} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
