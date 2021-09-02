import React, { useState, useCallback } from 'react';
import SearchIcon from './../icons/SearchIcon';
import useMeals from './../../hooks/meals-http';

const SearchMealsForm = () => {
  const [enteredSearchQuery, setEnteredSearchQuery] = useState('');
  const { getDataSearchMeals } = useMeals();

  const handleChangeEnteredSearchQuery = useCallback((e) => {
    setEnteredSearchQuery(e.target.value);
  }, []);

  const handleKeyUpEnter = async (e) => {
    if (e.keyCode === 13) {
      if (!enteredSearchQuery) {
        return;
      }
      getDataSearchMeals(enteredSearchQuery);
    }
  };

  return (
    <div className="w-[300px] sm:w-[500px] lg:w-[700px] mt-12 flex items-center gap-2 bg-white dark:bg-gray-900 px-6 py-4 rounded-full">
      <SearchIcon className="w-6 h-6 text-gray-900 dark:text-white" />
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search meals here..."
        className="bg-white dark:bg-gray-900 px-2 py-0 border-none focus:outline-none focus:ring-0 w-full"
        value={enteredSearchQuery}
        onChange={handleChangeEnteredSearchQuery}
        onKeyUp={handleKeyUpEnter}
      />
    </div>
  );
};

export default React.memo(SearchMealsForm);
