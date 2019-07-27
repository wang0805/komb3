import React, { Component, Fragment } from "react";
import Kombucha from "../../components/kombucha/kombucha";
import Buildcontrols from "../../components/kombucha/buildcontrols/buildcontrols";

class Kombbuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };
  render() {
    return (
      <Fragment>
        <Kombucha ingredients={this.state.ingredients} />
        <Buildcontrols />
      </Fragment>
    );
  }
}

export default Kombbuilder;
