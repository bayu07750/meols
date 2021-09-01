import React, { useState } from 'react';

export const MealsContext = React.createContext({
  meals: [],
  setDataMeals: (meals) => {},
});

const MealsContextProvider = (props) => {
  const [meals, setMeals] = useState([]);

  const setDataMeals = (meals) => {
    setMeals(meals);
  };

  const dataContext = {
    meals,
    setDataMeals,
  };

  return <MealsContext.Provider value={dataContext}>{props.children}</MealsContext.Provider>;
};

export default MealsContextProvider;
