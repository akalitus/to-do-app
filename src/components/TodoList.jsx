import { EditedItem } from './EditedItem';
import { TodoItem } from './TodoItem';

export function TodoList({ tabList, setTabList }) {

  return <ul className='list'>
    {tabList.length === 0 && 'The list is empty'}
    {tabList.map((item) => {

      return item.editMode === true
        ? <EditedItem
          key={item.id}
          {...item}
          setTabList={setTabList}
        />
        :
        <TodoItem
          key={item.id}
          {...item}
          setTabList={setTabList}
        />
    })}
  </ul>
}