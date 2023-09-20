function TabMenu({ id, clearTab, removeTab }) {
  return (
    <div className="tab-menu">
      <button
        className='button'
        onClick={() => clearTab(id)}
      >
        Clear Tab
      </button>

      <button
        className='button'
        onClick={() => removeTab(id)}
      >
        Remove Tab
      </button>
    </div>
  )
}

export default TabMenu
