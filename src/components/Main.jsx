import React, { useContext, useEffect } from 'react';
import Meals from './meals/Meals';
import { MealsContext } from './../context/meals-context';
import useMeals from './../hooks/meals-http';

const Main = () => {
  const mealsCtx = useContext(MealsContext);
  const { getDataSearchMeals } = useMeals();

  useEffect(() => {
    getDataSearchMeals('a');
  }, [getDataSearchMeals]);

  let content;

  if (mealsCtx.meals.length > 0) {
    content = <Meals />;
  }

  if (mealsCtx.meals.length === 0) {
    content = <div className="text-center text-4xl font-bold text-gray-600 dark:text-gray-400 mt-8">No food found</div>;
  }

  if (mealsCtx.isError) {
    content = (
      <div className="text-center text-4xl font-bold text-gray-600 dark:text-gray-400 mt-8">{mealsCtx.isError}</div>
    );
  }

  if (mealsCtx.isLoading) {
    content = <div className="text-center text-4xl font-bold text-gray-600 dark:text-gray-400 mt-8">Loading...</div>;
  }

  return (
    <main className="py-11 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">{content}</div>
    </main>
  );
};

export default Main;
