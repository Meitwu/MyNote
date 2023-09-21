import React from 'react'

interface Childprops {
  name: string
}

const ReactNoMemoDemo = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <div>Parent Count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <Child name="Son" />
    </div>
  )
}
// React.memo是官方提供的一个高阶组件，用于缓存我们需要优化的组件

// 如果你的组件在相同的props的情况下渲染相同的结果，那么你可以通过将其包装在React.memo中阻止组件重复渲染，返回上一次渲染的结果

//为什么不是每个组件都包裹React.memo,是因为React.memo是一个props相互比较的过程，如果props参数特别多就会非常消耗性能，甚至性能大于虚拟dom的重新渲染
// 什么时候该用？ 组件渲染过程特别消耗性能，以至于能感觉到到，比如：长列表、图表等
// 什么时候不该用？组件参数结构十分庞大复杂，比如未知层级的对象，或者列表（城市，用户名）等
// react.memo的高级用法。第二个参数是一个函数，用于比较新旧props。函数返回值是true或者false

function arePropsEqual(prevProps, nextProps) {
  return false
}

const Child = React.memo((props: Childprops) => {
  console.log('子组件渲染了')
  return <p>Child Name: {props.name}</p>
}, arePropsEqual)

export default ReactNoMemoDemo
