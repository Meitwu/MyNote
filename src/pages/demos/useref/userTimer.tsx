import { useRef } from 'react'

interface TimerRefprops {
  num?: number
  start?: () => void
  end?: () => void
}

const Index = (props) => {
  const TimerRef = useRef<TimerRefprops>({ num: 5 })
  TimerRef.current = {
    start: () => {
      console.log('start')
    }
  }

  return TimerRef.current
}
export default Index
