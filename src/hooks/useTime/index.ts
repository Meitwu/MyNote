import { useEffect, useRef, useState } from 'react'

type UseTimerType = [
  number,
  (newTime: number) => void,
  () => void,
  () => void,
  () => void
]

const useTime = (initState: number): UseTimerType => {
  const timerRef = useRef(null)
  const [time, settime] = useState(initState)
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      console.log(time)
      settime((origin: number) => origin - 1)
    }, 1000)
  }

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current)
    }
  }, [time])

  function endTimer() {
    clearInterval(timerRef.current)
  }
  const reset = () => {
    clearInterval(timerRef.current)
    settime(initState)
  }

  return [time, settime, startTimer, endTimer, reset]
}
export default useTime
