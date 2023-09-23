import { useEffect, useRef } from 'react';
import { EditedItem } from './EditedItem';
import { TodoItem } from './TodoItem';

export function TodoList({ taskList, setTabList }) {
  const listRef = useRef(null);
  const prevListLength = useRef(taskList.length);

  useEffect(() => {
    if (taskList.length > prevListLength.current) {
      if (listRef.current) {
        const listContainer = listRef.current;
        const listItems = listContainer.querySelectorAll('.list__item');
        const topElement = listItems[listItems.length - 1];
  
        if (topElement) {
          topElement.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
      }
    }

    prevListLength.current = taskList.length;
  }, [taskList]);

  return (
    <ul className='list' ref={listRef}>
      {taskList.length === 0 && 'The list is empty'}
      {taskList.map((item) => {
        return item.editMode === true
          ? <EditedItem key={item.id} {...item} setTabList={setTabList} />
          : <TodoItem key={item.id} {...item} setTabList={setTabList} />
      })}
    </ul>
  );
}