import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.css";

function Cart(props) {
  return (
    <Modal className={classes["cart-item"]} onHandleClose={props.onHandleClose}>
      {props.cart.map((item) => {
        return (
          <CartItem
            key={item.key}
            price={item.price}
            name={item.name}
            amount={item.count}
            onRemove={props.onRemove}
            onAdd={props.onAdd}
          />
        );
      })}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>$23.23</div>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
