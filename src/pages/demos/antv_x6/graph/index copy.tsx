import React, { useEffect, useRef, Ref, useState } from 'react'
import { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'
import { Snapline } from '@antv/x6-plugin-snapline'
import './index.less'

Graph.registerNode(
  'custom-node-width-port',
  {
    inherit: 'rect',
    width: 100,
    height: 40,
    attrs: {
      body: {
        stroke: '#8f8f8f',
        strokeWidth: 1,
        fill: '#fff',
        rx: 6,
        ry: 6
      }
    },
    // attrs: {
    //   line: {
    //     stroke: '#ccc'
    //   }
    // },
    labels: [
      {
        attrs: {
          line: {
            stroke: '#73d13d'
          },
          text: {
            text: 'Custom Label'
          }
        }
      }
    ],
    ports: {
      groups: {
        top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5
            }
          }
        },
        bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5
            }
          }
        }
      }
    }
  },
  true
)

export default React.forwardRef(function Example(
  props,
  ref: Ref<{ zoomIn: () => void; zoomOut: () => void }>
) {
  const refContainer = useRef()
  const dndContainer = useRef()
  const dndContainerRef = useRef()
  const [curentnode, setcurrentnode] = useState(null)

  // let graph: Graph
  // let dnd: Dnd

  const graph = useRef(null)
  const dnd = useRef(null)
  useEffect(() => {
    graph.current = new Graph({
      panning: true,
      container: refContainer.current,
      width: 800,
      height: 600,
      background: {
        color: '#F2F7FA'
      },
      grid: true,
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta']
      },
      connecting: {
        allowBlank: false,
        router: 'manhattan',
        connector: {
          name: 'rounded',
          args: {
            radius: 8
          }
        }
      }
    })

    graph.current.drawBackground({ color: '#f5d2d6' })
    graph.current.use(
      new Snapline({
        enabled: true,
        sharp: true
      })
    )

    const source = graph.current.addNode({
      shape: 'custom-node-width-port',
      x: 130,
      y: 30,
      width: 100,
      height: 40,
      label: 'Hello',
      ports: {
        items: [
          {
            id: 'port_1',
            group: 'bottom'
          },
          {
            id: 'port_2',
            group: 'bottom'
          }
        ]
      },
      attrs: {
        line: {
          sourceMarker: 'block',
          targetMarker: 'block',
          stroke: '#8f8f8f',
          strokeWidth: 1
        },
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6
        }
      }
    })

    const target = graph.current.addNode({
      shape: 'custom-node-width-port',
      x: 180,
      y: 160,
      width: 100,
      height: 40,
      label: 'World',
      attrs: {
        line: {
          sourceMarker: 'block',
          targetMarker: 'block',
          stroke: '#8f8f8f',
          strokeWidth: 1
        },
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6
        }
      },
      ports: {
        items: [
          {
            id: 'port_3',
            group: 'top'
          },
          {
            id: 'port_4',
            group: 'top'
          }
        ]
      }
    })

    // graph.addEdge({
    //   source,
    //   target
    // })
    graph.current.centerContent()

    dnd.current = new Dnd({
      target: graph,
      scaled: false,
      dndContainer: dndContainer.current
    })

    graph.current.on('node:click', ({ e, x, y, node, view }) => {
      setcurrentnode(node)
      // 取消其他节点的高亮状态
      graph.current.getNodes().forEach((n) => {
        if (n !== node) {
          console.log(n)
          n.attr('body/fill', '#fff') // 取消高亮
        }
      })

      // 高亮点击的节点
      node.attr('body/fill', '#f6eb15') // 设置高亮样式
    })

    // 监听节点连接事件
    graph.current.on('edge:connected', ({ edge }) => {
      // 设置边的标签
      edge.setLabels([
        {
          position: 0.5, // 设置标签在线的中点位置
          attrs: {
            text: {
              text: 'Edge Label',
              fill: '#f00', // 设置标签文本颜色为红色
              fontSize: 12 // 设置标签文本字体大小
            }
          }
        }
      ])
    })
  }, [])

  // 暴露方法给父组件
  const zoomIn = () => {
    graph.current.zoom(0.2)
  }
  const zoomOut = () => {
    graph.current.zoom(-0.2)
  }
  const zoomTo = () => {
    graph.current.zoom(1)
  }

  React.useImperativeHandle(ref, () => ({
    zoomIn,
    zoomTo,
    zoomOut
  }))

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget
    const type = target.getAttribute('data-type')
    const node =
      type === 'rect'
        ? graph.current.createNode({
            shape: 'custom-node-width-port',
            width: 100,
            height: 40,
            label: 'Rect',
            ports: {
              items: [
                {
                  id: 'port_7',
                  group: 'bottom'
                },
                {
                  id: 'port_8',
                  group: 'bottom'
                }
              ]
            },
            attrs: {
              body: {
                stroke: '#8f8f8f',
                strokeWidth: 1,
                fill: '#fff',
                rx: 6,
                ry: 6
              }
            }
          })
        : graph.createNode({
            // shape: 'custom-node-width-port',
            width: 60,
            height: 60,
            shape: 'circle',
            label: 'Circle',
            ports: {
              items: [
                {
                  id: 'port_5',
                  group: 'bottom'
                },
                {
                  id: 'port_6',
                  group: 'bottom'
                }
              ]
            },
            attrs: {
              body: {
                stroke: '#8f8f8f',
                strokeWidth: 1,
                fill: '#fff'
              }
            }
          })

    dnd.current.start(node, e.nativeEvent as any)
  }

  return (
    <div className="dnd-app">
      <div className="dnd-wrap" ref={dndContainerRef}>
        <div data-type="rect" className="dnd-rect" onMouseDown={startDrag}>
          Rect
        </div>
        <div data-type="circle" className="dnd-circle" onMouseDown={startDrag}>
          Circle
        </div>
      </div>

      <div className="app-content" ref={refContainer} />
      <div className="editinfo">{curentnode && curentnode.label}</div>
      <button
        onClick={() => {
          // const node = graph.getNodes()[0]
          console.log(graph)
          // node.prop('label', '1221212') // 更新节点的 label
        }}
      >
        111221
      </button>
    </div>
  )
})
