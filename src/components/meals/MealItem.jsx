import React from 'react';

const MealItem = ({ title, country, thumbnail }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-xl bg-white dark:bg-gray-800">
      <img src={thumbnail} alt="" className="h-48 w-full object-cover object-center" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold tracking-wide text-black dark:text-gray-100">{title}</h2>
        <h3 className="text-gray-600 dark:text-gray-400 font-light ">{country}</h3>
        <div className="text-xl font-semibold mt-1 text-black dark:text-gray-100">$9.99</div>
      </div>
    </div>
  );
};

export default MealItem;
