import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const DraggableSubMenu = ({ index, moveSubMenu, children }) => {
  const ref = useRef(null)

  const [, drag] = useDrag({
    type: 'DRAGGABLE_SUBMENU',
    item: { index }
  })

  const [, drop] = useDrop({
    accept: 'DRAGGABLE_SUBMENU',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveSubMenu(draggedItem.index, index)
        draggedItem.index = index
      }
    }
  })

  drag(drop(ref))

  return <div ref={ref}>{children}</div>
}

export default DraggableSubMenu
