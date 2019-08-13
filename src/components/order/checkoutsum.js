import React from "react";
import Kombucha from "../kombucha/kombucha";
import Button from "../ui/button/button";
import classes from "./checkoutsum.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope you like it</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Kombucha ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger">Cancel</Button>
      <Button btnType="Danger">Continue</Button>
    </div>
  );
};

export default checkoutSummary;
