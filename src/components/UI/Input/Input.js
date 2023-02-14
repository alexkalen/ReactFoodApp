import classes from "./Input.module.css";

function Input(props) {
  const mealCounterHandler = (event) => {
    props.onMealCounterChange(event.target.value);
  };

  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input
        type="number"
        min="0"
        value={props.counter}
        onChange={mealCounterHandler}
      ></input>
    </div>
  );
}

export default Input;
