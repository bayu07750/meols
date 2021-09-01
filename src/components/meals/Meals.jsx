import React, { useContext } from 'react';
import MealItem from './MealItem';
import { MealsContext } from './../../context/meals-context';

const Meals = () => {
  const mealsCtx = useContext(MealsContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mealsCtx.meals.map((meal) => {
        return <MealItem key={meal.id} title={meal.title} country={meal.country} thumbnail={meal.thumbnail} />;
      })}
    </div>
  );
};

export default Meals;
