import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem";

import Card from "../UI/Card/Card";
import { useCallback, useEffect, useState } from "react";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-3e360-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong..");
      }

      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  let content = <p>No meals available</p>;

  if (meals.length > 0) {
    content = (
      <ul>
        {meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            mealName={meal.name}
            mealDescription={meal.description}
            mealPrice={meal.price}
          />
        ))}
      </ul>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className={classes["loading-container"]}>
        <div className={classes["lds-dual-ring"]}></div>
      </div>
    );
  }

  return (
    <Card className={classes.meals}>
      <section>{content}</section>
    </Card>
  );
}

export default AvailableMeals;
