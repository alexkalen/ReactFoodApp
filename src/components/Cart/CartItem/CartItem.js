import CartContext from "../../../context/cart-context";
import classes from "./CartItem.module.css";

import { useContext } from "react";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onRemoveHandler = () => {
    ctx.removeHandler(props.id);
  };

  const onAddHandler = () => {
    ctx.addHandler(props.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
