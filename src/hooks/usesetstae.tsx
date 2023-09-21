import React, { useState } from 'react'

export default function useSetState(initState: any) {
  const [state, setState] = useState(initState)
  function setstatefun(...key: any) {
    setState((currentState) => {
      const newState = { ...currentState }
      for (let m = 0; m < key.length; m = m + 2) {
        newState[key[m]] = key[m + 1]
      }
      return newState
    })
  }
  return [state, setState, setstatefun]
}
