import { useEffect, useRef, useState } from 'react'
/***
 * ref的三大作用
 *  1.数据存储
 *  2.获取dom对象
 *  3.组件通讯
 */

export default function App() {
  const timer = useRef<null | any>(null)
  const [num, setNum] = useState(0)

  const start = () => {
    timer.current = setInterval(() => {
      // 设置新的状态值时记得这样写～
      setNum((num) => num + 1)
    }, 1000)
  }

  const clear = () => {
    clearInterval(timer.current)
  }

  useEffect(() => {
    // 组件销毁记得清除定时器
    return () => {
      clear()
    }
  }, [])

  return (
    <div>
      <div>{num}</div>
      <div>
        <button onClick={start}>start</button>
        <button onClick={clear}>clear</button>
      </div>
    </div>
  )
}
