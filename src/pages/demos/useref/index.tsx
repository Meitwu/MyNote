import React, { useEffect, useState, useRef } from 'react'
import useValuesRef from './current'
const Timer = () => {
  const [count, setCount] = useState(10)
  const latestCount = useValuesRef(count) // 定义一个ref，初始值是10
  const otherFn = () => {
    console.log('otherFn')
  }
  // useEffect(() => {
  //   console.log('count', count)
  //   latestCount.current = count // 更新
  // })
  useEffect(() => {
    const timer = setInterval(() => {
      if (latestCount.current === 0) {
        // 此处判断latestCount.current，而不是count
        clearInterval(timer)
        return
      }
      setCount((c) => c - 1)
    }, 1000)
    otherFn()
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div>{count}</div>
}

export default Timer
