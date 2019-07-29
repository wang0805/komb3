import React from "react";

import classes from "./buildcontrol.module.css";

const buildcontrol = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        disabled={props.disabled}
        onClick={props.removed}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildcontrol;
