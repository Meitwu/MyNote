import { Input } from 'antd'
import { useState } from 'react'

const Index: React.FC = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <h2>监听hook</h2>
      <div>新值： 旧值：</div>
      <Input />
    </div>
  )
}
export default Index
