import { useState } from "react";

export function EditedItem({ setTabList, id, title }) {
  const [value, setValue] = useState(title);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  function updateItem(event) {
    event.preventDefault();
    setTabList(currentTabs => {
      return currentTabs.map(tab => {
        if (tab.active) {
          const newTodoList = tab.todoList.map((item) => {
            if (item.id === id) {
              item.title = value
              item.editMode = false
            }
            return item;
          });
          return { ...tab, todoList: newTodoList };
        }
        return tab;
      });
    });
  }

  return (
    <li className='list__item'>
      <form
        onSubmit={updateItem}
        className='list__item-form'>
        <input
          className='list__item-edited'
          type='text'
          onChange={handleChange}
          value={value}
          placeholder='Update task'
        />

        <button
          type='submit'
          className='button button_type_update'
        >
          Update
        </button>
      </form>
    </li>
  )
}
