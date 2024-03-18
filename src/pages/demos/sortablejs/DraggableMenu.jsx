import React, { useState } from 'react'
import DraggableSubMenu from './DraggableSubMenu'
import { Menu } from 'antd'
const { SubMenu } = Menu

const DraggableMenu = ({ menuData }) => {
  const [orderedMenuData, setOrderedMenuData] = useState(menuData)

  const moveSubMenu = (fromIndex, toIndex) => {
    const updatedMenuData = [...orderedMenuData]
    const [movedItem] = updatedMenuData.splice(fromIndex, 1)
    updatedMenuData.splice(toIndex, 0, movedItem)
    setOrderedMenuData(updatedMenuData)
  }

  const renderSubMenu = (subMenu, index) => (
    <DraggableSubMenu key={subMenu.key} index={index} moveSubMenu={moveSubMenu}>
      <SubMenu
        key={subMenu.key}
        title={
          <span>
            {/* <CaretRightOutlined /> */}
            {subMenu.title}
          </span>
        }
      >
        {/* Recursive call to render child submenus */}
        {subMenu.children && subMenu.children.map(renderSubMenu)}
      </SubMenu>
    </DraggableSubMenu>
  )

  return <Menu mode="vertical">{orderedMenuData.map(renderSubMenu)}</Menu>
}

export default DraggableMenu
