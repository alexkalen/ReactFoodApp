import classes from "./Header.module.css";

import mealsImage from "../../../assets/meals.jpg";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

function Header() {
  return (
    <>
      <header className={classes["header"]}>
        <h1>FoodApp</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food"></img>
      </div>
    </>
  );
}

export default Header;
