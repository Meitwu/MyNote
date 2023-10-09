import React from 'react'
import { observer } from 'mobx-react'
import counterStore from '@/utils/store'

const Counter = observer(() => {
  const { count, increment, decrement } = counterStore

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
})

export default Counter
