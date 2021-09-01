import React from 'react';

const MealItem = ({ title, country, thumbnail }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-xl">
      <img src={thumbnail} alt="" className="h-48 w-full object-cover object-center" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
        <h3 className="text-gray-600 font-light ">{country}</h3>
        <div className="text-xl font-semibold mt-1">$9.99</div>
      </div>
    </div>
  );
};

export default MealItem;
