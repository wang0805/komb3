import React from "react";
import classes from "./kombucha.module.css";
import Komingredient from "./ingredients/ingredients";

const kombucha = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        //have to use [igkey] instead of .igkey as igkey is string i.e., something.'string' doesnt work
        return <Komingredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => arr.concat(el));

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredient</p>;
  }
  return (
    <div className={classes.kombucha}>
      <Komingredient type="bread-top" />
      {transformedIngredients}
      <Komingredient type="bread-bottom" />
    </div>
  );
};

export default kombucha;
