import './index.css'

const CategoryItem = props => {
  const {details, activeTab, changeTab} = props
  const {tabId, displayText} = details

  const onclickButton = () => {
    changeTab(tabId)
  }

  const getClassName = tabId === activeTab ? 'active-tab tab' : 'tab'

  return (
    <li>
      <button type="button" onClick={onclickButton} className={getClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default CategoryItem
