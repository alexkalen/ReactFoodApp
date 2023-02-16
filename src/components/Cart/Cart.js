import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.css";

function Cart(props) {
  let total = 0;

  return (
    <Modal className={classes["cart-item"]} onHandleClose={props.onHandleClose}>
      {props.cart.map((item) => {
        total = total + item.price * item.count;
        if (item.count > 0) {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              price={item.price}
              name={item.name}
              amount={item.count}
              onRemove={props.onRemove}
              onAdd={props.onAdd}
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
        <button onClick={props.onHandleClose}>Close</button>
        <button onClick={props.onOrder} className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
