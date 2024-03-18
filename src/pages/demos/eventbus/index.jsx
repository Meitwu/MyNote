import React, { Component, useEffect, useState } from 'react'
import eventBus from './eventBus.js'
import { useRef, useContext } from 'react'
import { UserContext } from '@/store/context'
import { Button, Input } from 'antd'
const ComponentA = () => {
  function handleClick() {
    eventBus.emit('customEvent', 'Hello from ComponentA!')
  }
  return <button onClick={handleClick}>Send Event from A</button>
}

const ComponentB = (props) => {
  const [state, setState] = useState({
    message: ''
  })
  useEffect(() => {
    const handleCustomEvent = (data) => {
      setState({ message: data })
    }

    eventBus.on('customEvent', handleCustomEvent)
    return () => {
      eventBus.off('customEvent', handleCustomEvent)
    }
  }, [])
  return <div>Message from ComponentA: {state.message}</div>
}

const App = () => {
  const { color, setcolor } = useContext(UserContext)
  function dataReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_KEYWORD':
        return { ...state, keyword: action.payload }
      case 'UPDATE_FILTER':
        return { ...state, filter: action.payload }
      default:
        return state
    }
  }
  const [data, dispatch] = React.useReducer(dataReducer, {
    keyword: '',
    filter: ''
  })

  return (
    <div>
      <Button
        onClick={() => {
          setcolor('#111111')
          dispatch({
            type: 'UPDATE_KEYWORD',
            payload: 'keywor11d'
          })
        }}
      >
        {color}
      </Button>
      <Input value={data.keyword} />
      <ComponentA />
      <ComponentB />
    </div>
  )
}

export default App
