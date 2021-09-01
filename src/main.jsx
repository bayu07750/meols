import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MealsContextProvider from './context/meals-context';

ReactDOM.render(
  <MealsContextProvider>
    <App />
  </MealsContextProvider>,
  document.getElementById('root')
);
