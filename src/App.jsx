import { useEffect, useState } from 'react'
import { NewItemForm } from './components/NewItemForm';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
import TabMenu from './components/TabMenu';
import Footer from './components/Footer';

function App() {
  const [tabList, setTabList] = useState(() => {
    const localTabList = localStorage.getItem('tabList');

    if (!localTabList) {
      return [];
    } else {
      return JSON.parse(localTabList);
    }
  });

  useEffect(() => {
    localStorage.setItem('tabList', JSON.stringify(tabList));
  },
    [tabList]);

  useEffect(() => {
    function handleScrollBar(listSelector, itemSelector, isRow) {
      const list = document.querySelector(`.${listSelector}`);

      if (list) {
        const items = list.querySelectorAll(`.${itemSelector}`);
        let totalSize = 0;

        items.forEach(item => {
          totalSize += isRow
            ? item.offsetWidth
            : item.offsetHeight;

          totalSize += parseFloat(getComputedStyle(list).gap);
        });

        if (totalSize < (isRow ? list.offsetWidth : list.offsetHeight)) {
          list.style.overflow = 'hidden';
        } else {
          list.style.overflow = 'auto';
        }
      }
    }

    handleScrollBar('tab-list', 'tab-item', true);
    handleScrollBar('list', 'list__item', false);
  });

  function addNewTab(title) {
    setTabList(currentTabs => {
      return [
        ...currentTabs.map((tab) => {
          tab.active = false;
          return tab;
        }),
        {
          id: crypto.randomUUID(),
          title,
          active: true,
          todoList: [],
        }
      ]
    })
  }

  function addNewItem(title) {
    setTabList(currentTabs => {
      return (currentTabs.map(tab => {
        if (tab.active) {
          const newTodoList = [...tab.todoList, {
            id: crypto.randomUUID(),
            title,
            completed: false
          }];
          return {
            ...tab,
            todoList: newTodoList
          };
        }
        return tab;
      }))
    })
  }

  function removeTab(id) {
    setTabList(currentTabs => {
      const index = currentTabs.findIndex(item => item.id === id);
      const filteredTabs = currentTabs.filter(tab => tab.id !== id);

      if (filteredTabs.length > 0 && index < filteredTabs.length) {
        filteredTabs[index].active = true;
      } else if (filteredTabs.length > 0 && index > 0) {
        filteredTabs[index - 1].active = true;
      }

      return filteredTabs;
    });
  }

  function clearTab(id) {
    setTabList(currentTabs => {
      const newTabs = currentTabs.map(tab => {
        if (tab.id !== id) {
          return tab;
        } else {
          return {
            ...tab,
            todoList: []
          };
        }
      });

      return newTabs;
    });
  }

  return (
    <>
      <Header
        tabList={tabList}
        setTabList={setTabList}
        addNewTab={addNewTab}
      />

      <main className='main'>

        {tabList.length !== 0
          && <>
            <NewItemForm
              addNewItem={addNewItem} />

            <TabMenu
              id={
                tabList.length
                && tabList.find(item => item.active === true).id
              }
              clearTab={clearTab}
              removeTab={removeTab}
            />

            <TodoList
              tabList={
                tabList.length
                && tabList.find(item => item.active === true).todoList
              }
              setTabList={setTabList} />
          </>
        }
      </main>
      <Footer />
    </>
  )
}

export default App
