import { ColorPicker, Space, theme } from 'antd'
import type { Color } from 'antd/es/color-picker'
import { useMemo, useState, forwardRef, useImperativeHandle } from 'react'

export default forwardRef((props, ref) => {
  const { token } = theme.useToken()
  const [color, setColor] = useState<Color | string>(token.colorPrimary)

  const bgColor = useMemo<string>(
    () => (typeof color === 'string' ? color : color.toHexString()),
    [color]
  )

  useImperativeHandle(
    ref,
    () => ({
      getColorValue: () => {
        return bgColor
      }
    }),
    [color, bgColor]
  )

  return (
    <ColorPicker value={color} onChange={setColor}>
      <Space>
        <div
          style={{
            width: token.sizeMD,
            height: token.sizeMD,
            borderRadius: token.borderRadiusSM,
            backgroundColor: bgColor
          }}
        />
        <span>{bgColor}</span>
      </Space>
    </ColorPicker>
  )
})
