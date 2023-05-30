import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem";

import Card from "../UI/Card/Card";
import { useCallback, useEffect, useState } from "react";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  return (
    <Card className={classes.meals}>
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
    </Card>
  );
}

export default AvailableMeals;
