import { Drawer, Form } from 'antd'
import ReactColor from '@/components/ReactColor'

export interface toolsdrawertypes {
  open: true | false
  setopen: (param: boolean) => void
}
const { Item } = Form

export default function ToolsDrawer(props: toolsdrawertypes) {
  const { open, setopen } = props
  return (
    <Drawer title="配置项" open={open} onClose={() => setopen(false)}>
      <Item label="主题色">
        <ReactColor />
      </Item>
    </Drawer>
  )
}
