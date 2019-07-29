import React from "react";

import classes from "./buildcontrols.module.css";
import Buildcontrol from "./buildcontrol";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildcontrols = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <Buildcontrol
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          keys={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildcontrols;
