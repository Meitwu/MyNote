import React from 'react'
import type { contextStateType } from './types'
const initState: contextStateType = {}
export const UserContext = React.createContext(initState)
