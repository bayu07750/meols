import { useState, useCallback } from 'react';
import Meal from './../model/Meal';

const useMeals = () => {
  const [enteredSearchQuery, setEnteredSearchQuery] = useState('');

  const handleChangeEnteredSearchQuery = useCallback((e) => {
    setEnteredSearchQuery(e.target.value);
  }, []);

  const handleKeyUpEnter = async (e) => {
    if (e.keyCode === 13) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${enteredSearchQuery}`);
      const data = await response.json();
      const dataMeals = data.meals.map((meal) => {
        return new Meal(meal.idMeal, meal.strMeal, meal.strArea, meal.strMealThumb, meal.strSource);
      });
      console.log(dataMeals);
    }
  };

  return {
    enteredSearchQuery,
    handleChangeEnteredSearchQuery,
    handleKeyUpEnter,
  };
};

export default useMeals;
