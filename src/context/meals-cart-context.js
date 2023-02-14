import React, { useState } from "react";

const MealsCartContext = React.createContext({
  mealCounter: 0,
  mealCounterHandler: () => {},
});

export const MealsCartContextProvider = (props) => {
  const [mealCounter, setMealCounter] = useState(0);

  const mealCounterHandler = (event) => {
    console.log("hi");
    let counter = event.target.value;
    setMealCounter(() => {
      counter = counter + 1;
      return counter;
    });
  };

  return (
    <MealsCartContext.Provider
      value={{
        mealCounterHandler: mealCounterHandler,
        mealCounter: mealCounter,
      }}
    >
      {props.children}
    </MealsCartContext.Provider>
  );
};

export default MealsCartContext;
