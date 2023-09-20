import { useState } from 'react';

export function NewItemForm({ addNewItem }) {
  const [newItem, setNewItem] = useState('');

  function handleInputChange(event) {
    setNewItem(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    addNewItem(newItem)
    setNewItem('');
  }

  return <form onSubmit={handleFormSubmit} className='new-form'>
    <input
      value={newItem}
      type='text'
      id='item'
      placeholder='New Task'
      minLength={1}
      autoComplete="off"
      required
      onChange={handleInputChange} />
    <button className='button'>Add</button>
  </form>
}