//子组件
import React, { useEffect, memo } from 'react'

// 只使用usecallback时会缓存 函数，当依赖项中的变量变化时，缓存的函数才会被重新创建。（”in child useEffect" 没有被打印出来
// "render child“ 仍然被打印。 表明函数已经被缓存了，但是并没有起到）

interface childProps {
  callback: () => void
}

export default React.memo(function ChildComponent({ callback }: childProps) {
  //使用useEffect来监听callback是否发生变化, ”child“ 会被打印出来
  useEffect(() => {
    console.log('in child useEffect')
  }, [callback])
  //这里我们观察子组件是否再次渲染，"render child" 也会被打印出来
  console.log('render child')

  return <button onClick={callback}>改变布尔值</button>
})
