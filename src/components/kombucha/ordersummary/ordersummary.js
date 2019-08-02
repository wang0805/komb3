import React, { Fragment } from "react";

import Button from "../../ui/button/button";

const orderSummary = props => {
  const ingredientSum = Object.keys(props.ingredients).map(igkey => {
    return (
      <li key={igkey}>
        <span styl={{ textTransform: "capitalize" }}>{igkey}:</span>
        {props.ingredients[igkey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Ingredients:</p>
      <ul>{ingredientSum}</ul>
      <p>Total Price: {props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" onClick={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" onClick={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default orderSummary;
