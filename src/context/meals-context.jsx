import React, { useState, useCallback, useMemo } from 'react';

export const MealsContext = React.createContext({
  meals: [],
  setDataMeals: (meals) => {},
  isLoading: false,
  setCurrentIsLoading: (state) => {},
});

const MealsContextProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const setDataMeals = useCallback((meals) => {
    setMeals(meals);
  }, []);

  const setCurrentIsLoading = useCallback((state) => {
    setIsLoading(state);
  }, []);

  const dataContext = useMemo(() => {
    return {
      meals,
      setDataMeals,
      isLoading,
      setCurrentIsLoading,
    };
  }, [meals, setDataMeals, isLoading, setCurrentIsLoading]);

  return <MealsContext.Provider value={dataContext}>{props.children}</MealsContext.Provider>;
};

export default MealsContextProvider;
