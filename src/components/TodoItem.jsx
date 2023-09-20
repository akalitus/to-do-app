import PropTypes from 'prop-types'

export function TodoItem({ setTodos, id, title, completed }) {

  function toggleItemState(id, completed) {
    setTodos(currentTodos => {
      return (currentTodos.map(item => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      }))
    })
  }

  function deleteItem(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(item => item.id !== id);
    })
  }

  return <li>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={event => toggleItemState(id, event.target.checked)}
      />
      {title}
    </label>
    <button
      className="button button_type_delete"
      onClick={() => deleteItem(id)}
    >Delete</button>
  </li>
}

TodoItem.propTypes = {
  setTodos: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}