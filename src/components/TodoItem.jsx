export function TodoItem({ setTabList, id, title, completed }) {

  function toggleItemState(id) {
    setTabList(currentTabs => {
      return (currentTabs.map(tab => {
        if (tab.active) {
          const newTodoList = tab.todoList.map(item => {
            if (item.id === id) {
              return { ...item, completed: !item.completed };
            }
            return item;
          });
          return { ...tab, todoList: newTodoList };
        }
        return tab;
      }))
    })
  }

  function deleteItem(id) {
    setTabList(currentTabs => {
      return currentTabs.map(tab => {
        if (tab.active) {
          const newTodoList = tab.todoList.filter(item => item.id !== id);
          return { ...tab, todoList: newTodoList };
        }
        return tab;
      });
    });
  }

  function editItem(id) {
    setTabList(currentTabs => {
      return currentTabs.map(tab => {
        if (tab.active) {
          const newTodoList = tab.todoList.map((item) => {
            item.id === id
              ? item.editMode = true
              : item.editMode = false

            return item;
          });
          return { ...tab, todoList: newTodoList };
        }
        return tab;
      });
    });
  }

  return <li className='list__item'>
    <label>
      <input
        type='checkbox'
        checked={completed}
        onChange={event => toggleItemState(id, event.target.checked)}
      />
      {title}
    </label>

    <div className="list__item-buttons">
      <button
        className='button'
        onClick={() => editItem(id)}
      >
        Edit
      </button>

      <button
        className='button button_type_delete'
        onClick={() => deleteItem(id)}
      >
        Delete
      </button>
    </div>
  </li>
}