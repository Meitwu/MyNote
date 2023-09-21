import React, { useRef } from 'react'
import { useDrop, useDrag } from 'react-dnd'
// dnd拖拽排序
export default (props: any) => {
  const { moveRow, index, children } = props
  const ref: any = useRef(null)
  const accept = 'DragDropBox'
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept,
    collect: (monitor) => {
      const { index: dragIndex } = (monitor.getItem() || {}) as any
      if (dragIndex === index) {
        return {}
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? ' drop-over-downward' : ' drop-over-upward'
      }
    },
    drop: (item: any) => {
      moveRow(item.index, index)
    }
  })
  const [, drag] = useDrag({
    type: accept,
    item: { index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  })
  const changeRef = drag(drop(ref))
  return (
    <div
      // @ts-ignore
      ref={changeRef}
      key={index + 1}
      className={`${isOver ? dropClassName : ''}`}
    >
      <span key={index}>{children}</span>
    </div>
  )
}
