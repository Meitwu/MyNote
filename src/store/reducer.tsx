import type { contextStateType } from './types'

function reducer(
  state: contextStateType,
  action: { type: string; payload?: number }
) {
  console.log('action.type', action.type, action)
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 }
    case 'sub':
      return { ...state, count: state.count - 1 }
    case 'theme':
      console.log('payload', { ...state, theme: action.payload })
      return { ...state, theme: action.payload }
    default:
      return state
  }
}

export { reducer }
