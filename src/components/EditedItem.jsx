import { useState } from "react";

export function EditedItem({ setTabList, id, title }) {
  const [value, setValue] = useState(title);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  function updateItem(id) {
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
    console.log(`new title for item ${id} is ${value}`)
  }

  return <li className='list__item'>
    <input
      className='list__item-edited'
      type='text'
      onChange={handleChange}
      value={value}
      placeholder='Update task'
    />

    <div className="list__item-buttons">
      <button
        className='button button_type_update'
        onClick={() => updateItem(id)}
      >
        Update
      </button>
    </div>
  </li>
}
