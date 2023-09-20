import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem';

export function TodoList({ todos, setTodos }) {

  return <ul className="list">
    {todos.length === 0 && 'No Todos'}
    {todos.map((item) => {
      return <TodoItem
        key={item.id}
        {...item}
        setTodos={setTodos}
      />
    })}
  </ul>
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
}