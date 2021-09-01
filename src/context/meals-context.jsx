import React, { useState, useCallback, useMemo } from 'react';

export const MealsContext = React.createContext({
  meals: [],
  setDataMeals: (meals) => {},
});

const MealsContextProvider = (props) => {
  const [meals, setMeals] = useState([]);

  const setDataMeals = useCallback((meals) => {
    setMeals(meals);
  }, []);

  const dataContext = useMemo(() => {
    return {
      meals,
      setDataMeals,
    };
  }, [meals, setDataMeals]);

  return <MealsContext.Provider value={dataContext}>{props.children}</MealsContext.Provider>;
};

export default MealsContextProvider;
