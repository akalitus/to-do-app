export function TodoItem({ setTabList, id, title, completed }) {

  function toggleItemState() {
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

  function deleteItem() {
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

  function editItem() {
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
        onChange={toggleItemState}
      />
      {title}
    </label>

    <div className="list__item-buttons">
      <button
        type='button'
        className='button'
        onClick={editItem}
      >
        Edit
      </button>

      <button
        type='button'
        className='button button_type_delete'
        onClick={deleteItem}
      >
        Delete
      </button>
    </div>
  </li>
}