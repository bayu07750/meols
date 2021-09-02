import { useState, useCallback, useContext } from 'react';
import Meal from './../model/Meal';
import { MealsContext } from './../context/meals-context';

const useMeals = () => {
  const mealsCtx = useContext(MealsContext);
  const [enteredSearchQuery, setEnteredSearchQuery] = useState('');

  const handleChangeEnteredSearchQuery = useCallback((e) => {
    setEnteredSearchQuery(e.target.value);
  }, []);

  const handleKeyUpEnter = async (e) => {
    if (e.keyCode === 13) {
      if (!enteredSearchQuery) {
        return;
      }

      mealsCtx.setCurrentIsLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${enteredSearchQuery}`);

        if (!response.ok) {
          throw new Error('Error des!!');
        }

        const data = await response.json();
        const savedataMeals = data.meals ?? [];
        const dataMeals = savedataMeals.map((meal) => {
          return new Meal(meal.idMeal, meal.strMeal, meal.strArea, meal.strMealThumb, meal.strSource);
        });
        mealsCtx.setDataMeals(dataMeals);
      } catch (e) {
        mealsCtx.setCurrentIsError(e.message);
      }
      mealsCtx.setCurrentIsLoading(false);
    }
  };

  return {
    enteredSearchQuery,
    handleChangeEnteredSearchQuery,
    handleKeyUpEnter,
  };
};

export default useMeals;
