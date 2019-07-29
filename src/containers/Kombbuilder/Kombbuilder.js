import React, { Component, Fragment } from "react";
import Kombucha from "../../components/kombucha/kombucha";
import Buildcontrols from "../../components/kombucha/buildcontrols/buildcontrols";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class Kombbuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igkey => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => sum + el);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updated = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updated;
    const priceAdd = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const totalPrice = oldPrice + priceAdd;
    this.setState({ ingredients: updatedIngredients, totalPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updated = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updated;
    const priceRem = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const totalPrice = oldPrice - priceRem;
    this.setState({ ingredients: updatedIngredients, totalPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Kombucha ingredients={this.state.ingredients} />
        <Buildcontrols
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Fragment>
    );
  }
}

export default Kombbuilder;
