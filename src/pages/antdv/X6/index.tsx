import React from 'react'
import { Graph } from '@antv/x6'
import './index.less'

const data = {
  // 节点
  nodes: [
    {
      id: 'node1',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      attrs: {
        body: {
          fill: '#2ECC71',
          stroke: '#000',
          strokeDasharray: '10,2'
        },
        label: {
          text: 'Hello',
          fill: '#333',
          fontSize: 13
        }
      }
    },
    {
      id: 'node2',
      shape: 'ellipse',
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'World'
    }
  ],
  // 边
  edges: [
    {
      source: 'node1',
      target: 'node2'
    }
  ]
}

export default function () {
  const containerRef = React.useRef()
  React.useEffect(() => {
    const graph = new Graph({
      container: containerRef.current,
      width: 800,
      height: 600,
      background: {
        color: '#fffbe6' // 设置画布背景颜色
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true // 渲染网格背景
      }
    })

    graph.fromJSON(data)
  })

  return (
    <div className="app">
      <div className="app-content" ref={containerRef} />
    </div>
  )
}
