import React from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import FloatingDarkModeToggle from './components/ui/FloatingDarkModeToggle';

function App() {
  return (
    <>
      <Header />
      <Main />
      <FloatingDarkModeToggle />
    </>
  );
}

export default App;
