import { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../../context/cart-context";

function HeaderCartButton() {
  const ctx = useContext(CartContext);

  return (
    <button onClick={ctx.openCartHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      Your Cart
      <span className={classes.badge}>{ctx.cartCount}</span>
    </button>
  );
}

export default HeaderCartButton;
