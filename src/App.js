import React from 'react';
import GroceryList from './components/GroceryList'
import './App.css';

function App() {
  return (
    <div className="GroceryListApp">
    <h1 className="heading">Joe's Groceries</h1>
      <GroceryList />
    </div>
  );
}

export default App;
