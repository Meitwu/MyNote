import React from 'react'
import useDrag from '.'
import './index.less'

function Test() {
  useDrag({
    dragger: '.dragger',
    draggerBox: '.draggerBox',
    container: '.container',
    maring: [10, 10, 10, 10]
  })

  return (
    <div className="container">
      <div className="draggerBox">
        <div className="dragger"></div>
      </div>
    </div>
  )
}

export default Test
