function TabMenu({ id, clearTab, removeTab }) {
  return (
    <div className="tab-menu">
      <button
        type='button'
        className='button'
        onClick={() => clearTab(id)}
      >
        Clear Tab
      </button>

      <button
        type='button'
        className='button'
        onClick={() => removeTab(id)}
      >
        Remove Tab
      </button>
    </div>
  )
}

export default TabMenu
