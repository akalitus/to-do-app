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
    hideScrollbar();
  },
    [tabList]);

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

  function hideScrollbar() {
    const tabList = document.querySelector('.tab-list');
    const tabItems = tabList.querySelectorAll('.tab-item');

    let totalWidth = 0;

    tabItems.forEach(item => {
      totalWidth += item.offsetWidth;
      totalWidth += parseFloat(getComputedStyle(item).gap);
    });

    if (totalWidth < tabList.offsetWidth) {
      tabList.style.overflow = 'hidden';
    } else {
      tabList.style.overflow = 'auto';
    }
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
            <TodoList
              tabList={tabList.length
                ? tabList.find(item => item.active === true).todoList
                : []}
              setTabList={setTabList} />
            <TabMenu
              id={tabList.length
                ? tabList.find(item => item.active === true).id
                : null}
              clearTab={clearTab}
              removeTab={removeTab}
            />
          </>
        }
      </main>
      <Footer />
    </>
  )
}

export default App
