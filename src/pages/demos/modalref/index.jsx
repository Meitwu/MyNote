import React from 'react'
import Select from 'antd/lib/select'
const items = [
  { code: 201, text: 'text1 code' },
  { code: 202, text: 'text2 code' },
  { code: 203, text: 'text3 code' },
  { code: 204, text: 'text4 code' },
  { code: 205, text: 'text5 code' },
  { code: 206, text: 'text6 code' }
]
const { Option } = Select

export default function () {
  return (
    <Select
      style={{ width: 200 }}
      onChange={(e) => {}}
      placeholder="custom dropdown render"
      defaultValue={205}
      dropdownRender={(menu) => {
        return (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 10px'
              }}
            >
              <div>区间名称</div>
              <div>区间编码</div>
            </div>
            {menu}
          </>
        )
      }}
      optionLabelProp="title" //使用 optionLabelProp 指定回填到选择框的 Option 属性。
    >
      {items.map((item, index) => (
        <Option key={index} value={item.code} title={item.text}>
          <span style={{ float: 'left' }}>{item.text}</span>
          <span style={{ float: 'right' }}>{item.code}</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              console.log('11111')
            }}
          >
            111
          </button>
        </Option>
      ))}
    </Select>
  )
}
