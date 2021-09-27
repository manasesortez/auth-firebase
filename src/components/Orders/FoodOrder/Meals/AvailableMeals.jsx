import { useEffect, useState } from 'react';
import React from 'react'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "../Meals/AvailableMeals.module.css";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('http://localhost:8001/api/products',{
        method: "GET",
        headers: {'Access-Control-Allow-Origin': '*',
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MkBmYWtlbWFpbC5jb20iLCJleHAiOjE2MzI3OTYyODYsImlhdCI6MTYzMjc2MDI4Nn0.5ZpSxrKXgiYR0pdkbCK5lg17DIP3QmJihqIjvXXJpR4'}
      });

      if(!response.ok){
        throw new Error('something went wrong');
      }

      const responseData = await response.json(); //este es un objeto
      //el objeto se traduce a un array
      const loadedMeals = [];

      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if(isLoading){
    return <section className={classes.MealsLoading}>
      <p>Loading data...</p>
    </section>
  }

  if(httpError){
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
