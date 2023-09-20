import { TabItem } from './TabItem'
import React, { useRef, useEffect } from 'react';

export function TabList({ setTabList, tabList }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      const listContainer = listRef.current;
      const checkedElement = listContainer.querySelector('input:checked');

      if (checkedElement) {
        checkedElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    }
  }, [tabList]);

  return (
    <ul ref={listRef} className='tab-list'>
      {tabList.length === 0 && 'Create a new To-Do list to get started'}
      {tabList.map(item => (
        <TabItem
          key={item.id}
          {...item}
          setTabList={setTabList} />
      ))}
    </ul>
  );
}