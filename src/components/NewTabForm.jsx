import { useState } from "react";

export function NewTabForm({ addNewTab }) {
  const [newItem, setNewItem] = useState('');

  function addNewItem(event) {
    setNewItem(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    addNewTab(newItem);
    setNewItem('');
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className='new-form'>
      <input
        value={newItem}
        type="text"
        placeholder="New Tab"
        minLength={1}
        required
        autoComplete="off"
        onChange={addNewItem} />

      <button
        type='submit'
        className="button button_type_new-list"
      >
        Add
      </button>
    </form>
  )
}