//App.jsx 作为父组件
import ChildComponent from './ChildComponent'
import { useState, useCallback } from 'react'

export default function App() {
  const [logic, setLogic] = useState(false)
  const [count, setCount] = useState(0)

  const handleClickCount = () => {
    setCount(count + 1)
  }
  //每次App重新渲染handleCallback都是不同的函数
  const handleCallback = useCallback(() => {
    setLogic((pre) => !pre)
  }, [logic])

  return (
    <div>
      <p>数值: {count}</p>
      <p>布尔值: {logic.toString()}</p>
      <button onClick={handleClickCount}>增加数值</button>
      <ChildComponent callback={handleCallback} />
    </div>
  )
}
