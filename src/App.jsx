import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [enteredSearch, setEnteredSearch] = useState('');

  const handleSearchOnChange = (e) => {
    setEnteredSearch(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      console.log(`you search ${enteredSearch}`);
    }
  };

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
