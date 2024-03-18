import React from 'react'
import GraphBox from './graph'
import { AppstoreOutlined } from '@ant-design/icons'
import { Tag } from 'antd'
import './index.less'
import amplify from '@/assets/amplify.png'
import reduce from '@/assets/reduce.png'

export default function () {
  const childRef = React.useRef<{ zoomIn: () => void; zoomOut: () => void }>(
    null
  )
  return (
    <div>
      <div className="toptool">
        <div>
          <AppstoreOutlined />
          <span> 流程测试/process_test </span>
          <Tag color="#108ee9"> 草稿</Tag>
          <Tag color="#2db7f5">#2.1</Tag>
        </div>

        <div className="zoomimgbox">
          <img
            className="zoomimg"
            src={amplify}
            onClick={() => {
              if (childRef && childRef.current) {
                childRef.current.zoomIn()
              }
            }}
          />
          <img
            className="zoomimg"
            src={reduce}
            onClick={() => {
              if (childRef && childRef.current) {
                childRef.current.zoomOut()
              }
            }}
          />
        </div>

        <div>11</div>
      </div>
      <GraphBox ref={childRef} />
    </div>
  )
}
