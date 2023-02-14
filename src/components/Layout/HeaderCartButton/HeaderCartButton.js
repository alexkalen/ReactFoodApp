import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

function HeaderCartButton(props) {
  const openCartHandler = (event) => {
    event.preventDefault();

    props.onOpenCartButton();
  };

  return (
    <button onClick={openCartHandler} className={classes.button}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      {props.title}
      <div className={classes.badge}>{props.count}</div>
    </button>
  );
}

export default HeaderCartButton;
