import React from 'react';
import Meals from './meals/Meals';

const Main = (props) => {
  return (
    <main className="py-11">
      <div className="container mx-auto px-6">
        <Meals />
      </div>
    </main>
  );
};

export default Main;
