import { useState } from "react";
import PropTypes from 'prop-types'

export function NewItemForm({ updateTodoList }) {
  const [newItem, setNewItem] = useState('');

  function addNewItem(event) {
    setNewItem(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    updateTodoList(newItem);
    setNewItem('');
  }

  return <form onSubmit={handleFormSubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        type="text"
        id="item"
        onChange={addNewItem} />
    </div>
    <button className="button">Add</button>
  </form>
}

NewItemForm.propTypes = {
  updateTodoList: PropTypes.func.isRequired
}