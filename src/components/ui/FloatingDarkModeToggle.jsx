import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MoonIcon from './../icons/MoonIcon';
import SunIcon from './../icons/SunIcon';

const FloatingDarkModeToggle = () => {
  const [isCurrentDarkMode, setIsCurrentDarkMode] = useState(false);

  const toggleIsCurrentDarkMode = useCallback(() => {
    setIsCurrentDarkMode((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const root = window.document.body.parentElement;
    if (isCurrentDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isCurrentDarkMode]);

  const content = (
    <div
      onClick={toggleIsCurrentDarkMode}
      className="group z-50 fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-14 h-14 cursor-pointer rounded-full shadow-lg bg-white dark:bg-gray-700 flex items-center justify-center"
    >
      {!isCurrentDarkMode && (
        <MoonIcon className="text-black dark:text-gray-100 w-6 h-6 group-hover:transform group-hover:rotate-[360deg] transition-all duration-300 ease-out" />
      )}
      {isCurrentDarkMode && (
        <SunIcon className="text-black dark:text-gray-100 w-6 h-6 group-hover:transform group-hover:rotate-[360deg] transition-all duration-300 ease-out" />
      )}
    </div>
  );

  return <>{ReactDOM.createPortal(content, document.getElementById('fab'))}</>;
};

export default FloatingDarkModeToggle;
