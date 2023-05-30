import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  cart: [],
  cartCount: 0,
  openCart: false,
  addMealToCart: (addedMeal) => {},
  openCartHandler: () => {},
  addHandler: (cartItemID) => {},
  removeHandler: (cartItemID) => {},
  orderHandler: () => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      let sum = 0;

      //Check it theres a better way so you dont iterate through cart every time.
      cart.forEach((item) => {
        sum = sum + item.count;
      });

      setCartCount(sum);
    }
  }, [cart]);

  const addMealToCart = (addedMeal) => {
    //Check if the cart is empty.
    //If not empty we add to the meal to the cart. If
    //the meal already exist we only sum to the meal's counter.
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
    <CartContext.Provider
      value={{
        cart: cart,
        cartCount: cartCount,
        openCart: openCart,
        addMealToCart: addMealToCart,
        openCartHandler: openCartHandler,
        addHandler: addHandler,
        removeHandler: removeHandler,
        orderHandler: orderHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
