import React, { useCallback, useMemo } from 'react'
// useMemo返回一个缓存的值，把“创建”函数和依赖数组作为参数传入useMemo,它仅会在某个依赖发生改变时才会重新计算memoizedValue值，
// 这种优化有助于避免在每次渲染的时候都进行高开销的计算

// useMemo 第一个参数是函数，函数需要返回计算值。 第二个参数是依赖数组，
// 如果不传，每次都会初始化， 缓存失败，
// 如果传空数组，则被无限缓存，永远返回第一次执行的结果
// 如果传状态，则在依赖的状态变化时，才会从新计算，如果这个缓存状态依赖了其他状态的话，则需要提供进去。
const ReactNoMemoDemo = () => {
  const [count, setCount] = React.useState(0)
  const [count1, setCount1] = React.useState(0)

  const memorizedChild = useMemo(() => <Child name="Son" />, [count1])

  return (
    <div>
      <div>Parent Count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount1((count) => count + 1)}>+</button>
      {memorizedChild}
    </div>
  )
}

const Child = (props) => {
  console.log('子组件渲染了')
  return <p>Child Name: {props.name}</p>
}

export default ReactNoMemoDemo
