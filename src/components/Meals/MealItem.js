import { useContext } from "react";

import CartContext from "../../context/cart-context";
import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const ctx = useContext(CartContext);

  const addingMealsHandler = (mealsCount) => {
    const addedMeal = {
      id: props.id,
      name: props.mealName,
      price: props.mealPrice,
      count: +mealsCount,
    };

    ctx.addMealToCart(addedMeal);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{props.mealPrice}</div>
      </div>
      <div>
        <MealItemForm onAddingMeals={addingMealsHandler} />
      </div>
    </li>
  );
}

export default MealItem;
