import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Layout/Summary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  const addMealToCart = (addedMeal) => {
    if (cart.length === 0) {
      setCart([addedMeal]);
    } else {
      let repeatingMealIndex = cart.findIndex(
        (item) => item.id === addedMeal.id
      );
      if (repeatingMealIndex !== -1) {
        cart[repeatingMealIndex].count =
          cart[repeatingMealIndex].count + addedMeal.count;
        setCartCount((prevCartCount) => {
          return prevCartCount + addedMeal.count;
        });
      } else {
        setCart((prevCart) => {
          return [...prevCart, addedMeal];
        });
      }
    }
  };

  const openCartHandler = () => {
    if (cart.length > 0) {
      setOpenCart((prevState) => {
        return !prevState;
      });
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      let sum = 0;

      cart.forEach((item) => {
        sum = sum + item.count;
      });

      setCartCount(sum);
    }
  }, [cart]);

  const addHandler = (cartItemID) => {
    const updatedCart = cart.map((item) => {
      if (item.id === cartItemID) {
        return { ...item, count: item.count + 1 };
      }

      return item;
    });

    setCart(updatedCart);
    setCartCount((prevCartCount) => {
      return prevCartCount + 1;
    });
  };

  const removeHandler = (cartItemID) => {
    const updatedCart = cart.map((item) => {
      if (item.id === cartItemID) {
        return { ...item, count: item.count - 1 };
      }

      return item;
    });

    setCart(updatedCart);
    setCartCount((prevCartCount) => {
      return prevCartCount - 1;
    });
  };

  const orderHandler = () => {
    console.log("Order processed!");
    console.log(cart);
    setCart([]);
    setCartCount(0);
    openCartHandler();
  };

  return (
    <>
      {openCart && (
        <Cart
          onHandleClose={openCartHandler}
          cart={cart}
          onAdd={addHandler}
          onRemove={removeHandler}
          onOrder={orderHandler}
        />
      )}
      <Header cartCount={cartCount} onOpenCart={openCartHandler} />
      <MealsSummary />
      <AvailableMeals meals={DUMMY_MEALS} onNewMeal={addMealToCart} />
    </>
  );
}

export default App;
