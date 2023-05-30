import { useState, useRef } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";

function MealItemForm(props) {
  const [formValid, setformValid] = useState(true);
  const mealCountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const mealCount = +mealCountRef.current.value;

    if (mealCount.length === 0 || mealCount < 1 || mealCount > 5) {
      setformValid(false);
      return;
    }

    props.onAddingMeals(mealCount); //Not calling context here because we still information about the cart
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <Input ref={mealCountRef} />
      </div>
      <div>
        <button type="submit">Add</button>
        {!formValid && <p>Please enter amount 1-5</p>}
      </div>
    </form>
  );
}

export default MealItemForm;
