import React, { useState, useCallback, useMemo } from 'react';

export const MealsContext = React.createContext({
  meals: [],
  setDataMeals: (meals) => {},
  isLoading: false,
  setCurrentIsLoading: (state) => {},
  isError: null,
  setCurrentIsError: (message) => {},
});

const MealsContextProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const setDataMeals = useCallback((meals) => {
    setMeals(meals);
  }, []);

  const setCurrentIsLoading = useCallback((state) => {
    setIsLoading(state);
  }, []);

  const setCurrentIsError = useCallback((message) => {
    setIsError(message);
  }, []);

  const dataContext = useMemo(() => {
    return {
      meals,
      setDataMeals,
      isLoading,
      setCurrentIsLoading,
      isError,
      setCurrentIsError,
    };
  }, [meals, setDataMeals, isLoading, setCurrentIsLoading, isError, setCurrentIsError]);

  return <MealsContext.Provider value={dataContext}>{props.children}</MealsContext.Provider>;
};

export default MealsContextProvider;
