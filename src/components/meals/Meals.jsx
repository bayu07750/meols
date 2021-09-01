import React from 'react';
import MealItem from './MealItem';

const Meals = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
    </div>
  );
};

export default Meals;
