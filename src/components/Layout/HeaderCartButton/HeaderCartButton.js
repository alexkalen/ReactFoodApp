import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

function HeaderCartButton(props) {
  const openCartHandler = (event) => {
    event.preventDefault();

    props.onOpenCartButton();
  };

  return (
    <button onClick={openCartHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {props.title}
      <span className={classes.badge}>{props.count}</span>
    </button>
  );
}

export default HeaderCartButton;
