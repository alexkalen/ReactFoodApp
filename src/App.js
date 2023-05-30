import { useContext } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Layout/Summary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import CartContext from "./context/cart-context";

function App() {
  const ctx = useContext(CartContext);

  return (
    <>
      {ctx.openCart && <Cart />}
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
