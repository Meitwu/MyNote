import UserTime from '@/hooks/useTime/demo'
import UseDebounce from '@/hooks/useDebounce/demo'
import UseThrottle from '@/hooks/useThrottle/demo'
import UseWatchValue from '@/hooks/useWatchValue/demo'
import UseDrag from '@/hooks/useDrag/demo'
import { Divider } from 'antd'

const hooks = [
  <UserTime />,
  <UseDebounce />,
  <UseThrottle />,
  <UseWatchValue />
  // <UseDrag />
]

const Index: React.FC = () => {
  return (
    <div>
      {hooks.map((item, i) => (
        <div key={i}>
          {item}
          <Divider />
        </div>
      ))}
    </div>
  )
}
export default Index
