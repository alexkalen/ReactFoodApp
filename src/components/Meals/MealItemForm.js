import { useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";

function MealItemForm(props) {
  const [mealCounter, setMealCounter] = useState(0);

  const addMealHandler = (event) => {
    event.preventDefault();

    if (mealCounter === 0) {
      return;
    }

    props.onAddingMeals(mealCounter);

    setMealCounter(0);
  };

  const changeMealCounter = (numberOfMeals) => {
    setMealCounter(numberOfMeals);
  };

  return (
    <form onSubmit={addMealHandler} className={classes.form}>
      <div>
        <Input counter={mealCounter} onMealCounterChange={changeMealCounter} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default MealItemForm;
