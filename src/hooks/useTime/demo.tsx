import { Button, Space } from 'antd'
import useTime from './index'

const Index: React.FC = () => {
  const [time, settime, startTimer, endTimer, reset] = useTime(30)
  return (
    <div>
      <h2>倒计时hook</h2>
      <div>{String(time)}</div>
      <Space>
        <Button onClick={startTimer} type="primary">
          开始
        </Button>
        <Button onClick={endTimer}>暂停</Button>
        <Button onClick={reset}>重置</Button>
      </Space>
    </div>
  )
}
export default Index
