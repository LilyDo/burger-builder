import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIndredient";

const Burger = (props) => {
  // props.ingredients.salad == props.ingredients["salad"]

  // Object.keys(props.ingredients) = ["salad", "bacon", "cheese", "meat"]
  // props.ingredients.salad: 1
  // igKey = "salad"
  // numberOfLayers = 1
  // [...Array(numberOfLayers)] = [undefined]
  // i: 0

  // props.ingredients.cheese: 2
  // igKey = "cheese"
  // numberOfLayers = 2
  // [...Array(numberOfLayers)] = [undefined, undefined]
  // i: 0
  // i: 1

  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      const numberOfLayers = props.ingredients[igKey];
      return [...Array(numberOfLayers)].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
