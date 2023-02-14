import classes from "./Header.module.css";

import mealsImage from "../../../assets/meals.jpg";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

function Header(props) {
  const onOpenCartButtonHandler = () => {
    props.onOpenCart();
  };

  return (
    <>
      <header className={classes["header"]}>
        <h1>FoodApp</h1>
        <HeaderCartButton
          title="Your Cart"
          count={props.cartCount}
          onOpenCartButton={onOpenCartButtonHandler}
        ></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food"></img>
      </div>
    </>
  );
}

export default Header;
