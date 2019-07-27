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
      {controls.map(ctrl => (
        <Buildcontrol keys={ctrl.label} label={ctrl.label} type={ctrl.type} />
      ))}
    </div>
  );
};

export default buildcontrols;
