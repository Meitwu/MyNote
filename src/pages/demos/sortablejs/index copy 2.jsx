import React, { useState, useRef } from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ItemType = 'MENU_ITEM'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const DraggableMenuItem = React.memo(
  ({ index, id, label, icon, type, moveItem, children }) => {
    const ref = useRef(null)

    const [, drop] = useDrop({
      accept: ItemType,
      hover(item, monitor) {
        if (!ref.current) {
          return
        }

        const dragIndex = item.index
        const hoverIndex = index

        if (dragIndex === hoverIndex) {
          return
        }

        const hoverBoundingRect = ref.current.getBoundingClientRect()
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top

        if (
          (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
          (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
        ) {
          moveItem(dragIndex, hoverIndex)
          item.index = hoverIndex
        }
      }
    })

    const [{ isDragging }, drag] = useDrag({
      type: ItemType,
      item: { id, index, type },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    })

    const opacity = isDragging ? 0.5 : 1

    drag(drop(ref))

    const moveChildItem = (dragIndex, hoverIndex) => {
      console.log('moveChildItem', dragIndex, hoverIndex)
    }

    return (
      <div ref={ref} style={{ opacity }}>
        {children && children.length ? (
          <Menu.SubMenu title={label}>
            {children.map((item, index) => (
              <DraggableMenuItem
                key={item.key}
                index={index + 'child'}
                id={item.key}
                label={item.label}
                icon={item.icon}
                type={ItemType}
                moveItem={moveChildItem}
                children={item.children}
              />
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={id} icon={icon}>
            {label}
          </Menu.Item>
        )}
      </div>
    )
  }
)

const SortableMenu = ({ items }) => {
  const [menuItems, setMenuItems] = useState(items)

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = menuItems[dragIndex]
    const updatedItems = [...menuItems]

    console.log('dragIndex, hoverIndex', dragIndex, hoverIndex)

    updatedItems.splice(dragIndex, 1)
    updatedItems.splice(hoverIndex, 0, draggedItem)

    setMenuItems(updatedItems)
  }
  return (
    <Menu
      mode="inline"
      style={{ width: 256 }}
      onOpenChange={(val) => {
        console.log(val)
      }}
    >
      {menuItems.map((item, index) => (
        <DraggableMenuItem
          key={item.key}
          index={index}
          id={item.key}
          label={item.label}
          icon={item.icon}
          type={ItemType}
          moveItem={moveItem}
          children={item.children}
        />
      ))}
    </Menu>
  )
}

const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4')
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8')
    ])
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
]

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <SortableMenu items={items} />
    </DndProvider>
  )
}

export default App
