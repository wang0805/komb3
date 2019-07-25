import React from "react";

import classes from "./kombucha.module.css";

const Ingredient = props => {
  let ingredients = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
    case "bread-top":
      ingredient = <div className={classes.BreadTop} />;
  }
};

export default Ingredient;
