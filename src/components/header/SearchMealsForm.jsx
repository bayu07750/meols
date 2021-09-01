import React from 'react';
import SearchIcon from './../icons/SearchIcon';
import useMeals from './../../hooks/meals-http';

const SearchMealsForm = () => {
  const { enteredSearchQuery, handleChangeEnteredSearchQuery, handleKeyUpEnter } = useMeals();

  return (
    <div className="w-[300px] sm:w-[500px] lg:w-[700px] mt-12 flex items-center gap-2 bg-white px-6 py-3 rounded-full">
      <SearchIcon className="w-6 h-6" />
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search meals here..."
        className="px-2 py-0 border-none focus:outline-none focus:ring-0 w-full"
        value={enteredSearchQuery}
        onChange={handleChangeEnteredSearchQuery}
        onKeyUp={handleKeyUpEnter}
      />
    </div>
  );
};

export default React.memo(SearchMealsForm);
