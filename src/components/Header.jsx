import { TabList } from './TabList';
import { NewTabForm } from './NewTabForm';

export function Header({ tabList, setTabList, addNewTab }) {

  return <header className='header'>
  <h1 className='header__title'>To-Do App</h1>
    <NewTabForm
      addNewTab={addNewTab}
    />

    <TabList
      tabList={tabList}
      setTabList={setTabList}
    />
  </header>
}