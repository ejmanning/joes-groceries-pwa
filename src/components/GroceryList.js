import React, {useState} from 'react'
import GroceryListForm from './GroceryListForm'
import Grocery from './Grocery'

function GroceryList() {
  const[groceries, setGroceries] = useState([]);

  const addGroceries = groceryItem => {
    if(!groceryItem.text || /^\s*$/.test(groceryItem.text)) {
      return;
    }

    const newGroceryItems = [groceryItem, ...groceries]
    setGroceries(newGroceryItems);
  };

  const updateGroceryItem = (groceryItemID, newValue) =>  {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setGroceries(prev =>prev.map(item => (item.id === groceryItemID ? newValue : item)))
  }

  const removeGroceryItem = id => {
    const removeArr = [...groceries].filter(groceryItem => groceryItem.id !== id)
    setGroceries(removeArr);
  }

  const completeGroceryItem = id => {
    let updateGroceries = groceries.map(groceryItem => {
      if(groceryItem.id === id) {
        groceryItem.isComplete = !groceryItem.isComplete
      }
      return groceryItem
    })
    setGroceries(updateGroceries);
  }

  return (
    <div>
      <h1>Add to Grocery List</h1>
      <GroceryListForm onSubmit={addGroceries}/>
      <Grocery
        groceries = {groceries}
        completeGroceryItem = {completeGroceryItem}
        removeGroceryItem = {removeGroceryItem}
        updateGroceryItem = {updateGroceryItem}
      />

    </div>
  )

}

export default GroceryList
