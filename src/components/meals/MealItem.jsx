import React from 'react';
import headerImage from './../../assets/header-image.jpg';

const MealItem = (props) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img src={headerImage} alt="" className="h-48 w-full object-cover object-center" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold tracking-wide">Title meals</h2>
        <h3 className="text-gray-600 font-light ">Indonesia</h3>
        <div className="text-xl font-semibold mt-1">$9.99</div>
      </div>
    </div>
  );
};

export default MealItem;
