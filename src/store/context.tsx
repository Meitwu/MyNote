import React from 'react'
import type { contextStateType } from './types'
const initState: contextStateType = {
  name: '',
  id: '',
  roleid: '',
  count: 1,
  theme: '#1890ff'
}
export const UserContext = React.createContext(initState)
