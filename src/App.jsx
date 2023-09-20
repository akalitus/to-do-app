import { useEffect, useState } from 'react'
import { NewItemForm } from './Components/NewItemForm';
import { TodoList } from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem('todos');

    if (!localTodos) {
      return [];
    } else {
      return JSON.parse(localTodos);
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function updateTodoList(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    })
  }

  return (
    <>
      <NewItemForm
        updateTodoList={updateTodoList}
      />
      <h1 className="header">ToDo List</h1>
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </>
  )
}

export default App
