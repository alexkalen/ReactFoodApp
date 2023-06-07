import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input ref={ref} type="number" min="0"></input>
    </div>
  );
});

export default Input;
