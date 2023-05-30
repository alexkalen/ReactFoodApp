import { useContext } from "react";

import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.css";

function Cart(props) {
  const ctx = useContext(CartContext);
  let total = 0;

  return (
    <Modal className={classes["cart-item"]}>
      {ctx.cart.map((item) => {
        total = total + item.price * item.count;
        if (item.count > 0) {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              price={item.price}
              name={item.name}
              amount={item.count}
            />
          );
        }
        return <p>There are currently no items to process.</p>;
      })}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{total.toFixed(2)}</div>
      </div>
      <div className={classes.actions}>
        <button onClick={ctx.openCartHandler}>Close</button>
        <button onClick={ctx.orderHandler} className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
