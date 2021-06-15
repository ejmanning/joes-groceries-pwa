import React, {useState} from 'react'
import GroceryListForm from './GroceryListForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Grocery( {groceries, completeGroceryItem, removeGroceryItem, updateGroceryItem}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateGroceryItem(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if(edit.id) {
    return <GroceryListForm edit={edit} onSubmit= {submitUpdate} />
  }

  return groceries.map ((groceryItem, index) => (
    <div
      className = {groceryItem.isComplete ? 'grocery-row complete' : 'grocery-row'}
      key={index}
    >
      <div key={groceryItem.id} onClick={() => completeGroceryItem(groceryItem.id)}>
        {groceryItem.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick = {() => removeGroceryItem(groceryItem.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick = {() => setEdit({id: groceryItem.id, value: groceryItem.text})}
          className="edit-icon"
        />
      </div>

    </div>
  ))
}

export default Grocery
