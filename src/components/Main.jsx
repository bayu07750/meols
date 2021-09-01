import React, { useContext } from 'react';
import Meals from './meals/Meals';
import { MealsContext } from './../context/meals-context';

const Main = (props) => {
  const mealsCtx = useContext(MealsContext);

  let content = <div className="text-center text-4xl font-bold text-gray-600 mt-8">No food data yet</div>;

  if (mealsCtx.meals.length > 0) {
    content = <Meals />;
  }

  if (mealsCtx.meals.length === 0) {
    content = <div className="text-center text-4xl font-bold text-gray-600 mt-8">No food found</div>;
  }

  return (
    <main className="py-11">
      <div className="container mx-auto px-6">{content}</div>
    </main>
  );
};

export default Main;
