import React from 'react';
import headerImage from './../../assets/header-image.jpg';
import SearchMealsForm from './SearchMealsForm';

const Header = () => {
  return (
    <header className="h-[400px] overflow-hidden relative">
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-extrabold">Temukan makanan atau sekedar melihat</h1>
        <div className="text-white mt-4 max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem odio accusantium sunt tempora ut
          sapiente optio, adipisci fugit. Accusantium vero officia optio a assumenda, sunt reprehenderit illum sapiente
          fugit?
        </div>
        <SearchMealsForm />
      </div>
      <img src={headerImage} alt="image header" className="absolute inset-0 blur-sm object-center" />
    </header>
  );
};

export default Header;
