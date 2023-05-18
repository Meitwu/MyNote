import React from 'react'
import { useEffect } from 'react'
interface ChildProps {
  num1?: number
  num2?: number
  onClick: (num: number) => void
}
function Child(props: ChildProps) {
  const { num1, onClick } = props
  useEffect(() => {
    console.log('子元素render')
  }, [])
  console.log('子元素render')
  return (
    <div>
      <div>我是一个子组件，父级传过来的数据：{num1}</div>
      <button onClick={onClick.bind(null, 1)}>改变num2</button>
    </div>
  )
}
/**
 *  1.子组件使用React.memo时，父组件更新state不会导致到子组件的render
 *  2.当子父组传参或者函数给子组件时，memo会不生效，此时需要引入useMemo跟useCallback
 *
 */

export default React.memo(Child)
