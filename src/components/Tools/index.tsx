import { Button, Drawer, Form } from 'antd'
import ReactColor from '@/components/ReactColor'
import { useRef, useContext } from 'react'
import { UserContext } from '@/store/context'

export interface toolsdrawertypes {
  open: true | false
  setopen: (param: boolean) => void
}
const { Item } = Form

export default function ToolsDrawer(props: toolsdrawertypes) {
  const { open, setopen } = props
  const ColorRef: any = useRef(null)

  const {
    state: { count, theme },
    dispatch
  } = useContext(UserContext)

  return (
    <Drawer title="配置项" open={open} onClose={() => setopen(false)}>
      <Item label="主题色">
        <ReactColor ref={ColorRef} />
      </Item>
      <Button
        type="primary"
        onClick={() => {
          ColorRef &&
            ColorRef.current &&
            dispatch({
              type: 'theme',
              payload: ColorRef.current.getColorValue()
            })
        }}
      >
        打印
      </Button>
    </Drawer>
  )
}
