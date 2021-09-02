import React from 'react';
import headerImage from './../../assets/header-image.jpg';
import SearchMealsForm from './SearchMealsForm';

const Header = () => {
  return (
    <header className="h-[400px] overflow-hidden relative">
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-white dark:text-gray-800 font-extrabold text-center text-4xl sm:text-4xl lg:text-5xl sm:max-w-2xl lg:max-w-none px-4 sm:px-0">
          Temukan makanan atau sekedar melihat
        </h1>
        <div className="hidden lg:block text-white dark:text-gray-600 mt-4 max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem odio accusantium sunt tempora ut
          sapiente optio, adipisci fugit. Accusantium vero officia optio a assumenda, sunt reprehenderit illum sapiente
          fugit?
        </div>
        <SearchMealsForm />
      </div>
      <img
        src={headerImage}
        alt="image header"
        className="absolute top-0 left-0 h-full w-full filter blur-sm object-cover object-center"
      />
    </header>
  );
};

export default React.memo(Header);
