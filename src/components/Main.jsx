import React, { useContext, useEffect, useCallback } from 'react';
import Meals from './meals/Meals';
import Meal from './../model/Meal';
import { MealsContext } from './../context/meals-context';

const Main = () => {
  const mealsCtx = useContext(MealsContext);

  const fecthMeals = useCallback(async () => {
    mealsCtx.setCurrentIsLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`);

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

  useEffect(() => {
    fecthMeals();
  }, [fecthMeals]);

  let content;

  if (mealsCtx.meals.length > 0) {
    content = <Meals />;
  }

  if (mealsCtx.meals.length === 0) {
    content = <div className="text-center text-4xl font-bold text-gray-600 mt-8">No food found</div>;
  }

  if (mealsCtx.isError) {
    content = <div className="text-center text-4xl font-bold text-gray-600 mt-8">{mealsCtx.isError}</div>;
  }

  if (mealsCtx.isLoading) {
    content = <div className="text-center text-4xl font-bold text-gray-600 mt-8">Loading...</div>;
  }

  return (
    <main className="py-11">
      <div className="container mx-auto px-6">{content}</div>
    </main>
  );
};

export default Main;
