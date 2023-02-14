import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const addingMealsHandler = (mealsCount) => {
    const addedMeal = {
      name: props.mealName,
      price: props.mealPrice,
      count: +mealsCount,
      id: Math.random().toString(),
    };

    props.onAddMeal(addedMeal);
  };

  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{props.mealPrice}</div>
      </div>
      <div>
        <MealItemForm onAddingMeals={addingMealsHandler} />
      </div>
    </div>
  );
}

export default MealItem;
