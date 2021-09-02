import { useContext, useCallback } from 'react';
import Meal from './../model/Meal';
import { MealsContext } from './../context/meals-context';

const useMeals = () => {
  const mealsCtx = useContext(MealsContext);

  const getDataSearchMeals = useCallback(async (query) => {
    mealsCtx.setCurrentIsLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

      if (!response.ok) {
        throw new Error('Something want wrong!');
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
  }, []);

  return {
    getDataSearchMeals,
  };
};

export default useMeals;
