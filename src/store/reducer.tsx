import type { contextStateType } from './types'

function reducer(
  state: contextStateType,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case 'add':
      return { ...state, count: state['count'] + action.payload }
    case 'sub':
      return { ...state, count: state['count'] - action.payload }
    case 'theme':
      console.log('payload', { ...state, theme: action.payload })
      return { ...state, theme: action.payload }
    default:
      return state
  }
}

export { reducer }
