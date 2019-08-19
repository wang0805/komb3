import React, { Component } from "react";
import { Route } from "react-router-dom";

import ContactData from "./contactdata/contactdata";
import CheckoutSummary from "../../components/order/checkoutsum";

class Checkout extends Component {
  state = {
    ingredients: {
      test: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let params of query.entries()) {
      ingredients[params[0]] = +params[1];
    }
    this.setState({ ingredients });
  }

  checkoutCancel = () => {
    this.props.history.goBack();
  };

  checkoutContinue = () => {
    this.props.history.replace("/checkout/contactdata");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancel}
          checkoutContinue={this.checkoutContinue}
        />
        <Route
          path={this.props.match.path + "/contactdata"}
          render={props => (
            <ContactData ingredients={this.state.ingredients} {...props} />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
