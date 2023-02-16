import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem";

import Card from "../UI/Card/Card";

function AvailableMeals(props) {
  const addMealToCart = (addedMeal) => {
    props.onNewMeal(addedMeal);
  };

  return (
    <Card className={classes.meals}>
      <ul>
        {props.meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            mealName={meal.name}
            mealDescription={meal.description}
            mealPrice={meal.price}
            onAddMeal={addMealToCart}
          />
        ))}
      </ul>
    </Card>
  );
}

export default AvailableMeals;
