import { useState, useEffect } from 'react'

function Timer(props) {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    if (props.Seconds) {
      setSeconds(props.Seconds)
    }
  }, [props.Seconds])
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return <div>{seconds}秒</div>
}

export default Timer
