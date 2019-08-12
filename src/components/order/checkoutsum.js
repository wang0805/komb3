import React from "react";
import Kombucha from "../kombucha/kombucha";

const checkoutSummary = props => {
  return (
    <div>
      <h1>Hope you like it</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Kombucha ingredients={props.ingredients} />
      </div>
    </div>
  );
};

export default checkoutSummary;
