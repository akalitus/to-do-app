export function TabItem({ setTabList, id, title, active }) {
  function changeTab() {
    setTabList(currentTabs => {
      return (currentTabs.map(item => {
        if (item.id === id) {
          item.active = true;
          return item;
        }
        item.active = false;
        return item;
      }))
    })
  }

  return <li className='tab-item'>
    <label
      className='tab-item__label'
      htmlFor={id}>
      <input
        type='radio'
        className='tab-item__input'
        name='tab-item'
        value={title}
        id={id}
        checked={active}
        onChange={changeTab}
      />
      {title}
    </label>
  </li>
}