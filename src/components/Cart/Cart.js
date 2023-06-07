import { useContext } from "react";

import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.css";

function Cart(props) {
  const ctx = useContext(CartContext);

  const checkoutHandler = () => {
    ctx.orderHandler();
  };

  return (
    <Modal>
      {ctx.cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            name={item.name}
            amount={item.count}
          />
        );
      })}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{ctx.cartTotal}</div>
      </div>
      <div className={classes.actions}>
        <button onClick={ctx.openCartHandler}>Close</button>
        <button onClick={checkoutHandler} className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
