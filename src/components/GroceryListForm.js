import React, {useState, useEffect, useRef} from 'react'

function GroceryListForm(props) {
  const[input, setInput] = useState(props.edit ? props.edit.value: '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  }
  return (
    <form className = "groceryListForm" onSubmit={handleSubmit}>
      {props.edit ? (

        <><input
          type="text"
          placeholder = "Update grocery item"
          value={input}
          name="text"
          className = "groceryListForm-input edit"
          onChange = {handleChange}
          ref={inputRef}
        />
        <button className = "groceryListForm-button edit">Update</button></>

      )
        :
        (<><input
          type="text"
          placeholder = "Add to grocery list"
          value={input}
          name="text"
          className = "groceryListForm-input"
          onChange = {handleChange}
          ref={inputRef}
        />
        <button className = "groceryListForm-button">Add to list</button>
        </>)
    }
    </form>

  )
}

export default GroceryListForm
