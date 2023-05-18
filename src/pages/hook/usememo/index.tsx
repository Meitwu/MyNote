import React from 'react'
import { Button } from 'antd'
import Child from './child'
import { useSetState } from 'ahooks'

interface statedata {
  num1: number
  num2: number
}

export default function () {
  const [data, setdata] = useSetState<statedata>({
    num1: 0,
    num2: 0
  })
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setdata({ num1: data.num1 + 1 })
        }}
      >
        {`number1: ${data?.num1}`}
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setdata({ num2: data.num2 + 1 })
        }}
      >
        {`number2: ${data?.num2}`}
      </Button>
      <Child
        num1={data?.num1}
        onClick={React.useCallback(
          (num: number) => setdata({ num1: data?.num1 + num }),
          [data?.num1]
        )}
      />
    </div>
  )
}
