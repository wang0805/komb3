import React, { Component } from "react";
import CheckoutSummary from "../../components/order/checkoutsum";

class Checkout extends Component {
  state = {
    ingredients: {
      test: 1
    }
  };
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
