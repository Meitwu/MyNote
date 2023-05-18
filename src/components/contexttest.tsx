import { Button } from 'antd'
import { useContext } from 'react'
import { UserContext } from '../store/context'
function ContextTest() {
  const {
    state: { count },
    dispatch
  } = useContext(UserContext)

  return (
    <div>
      <p>{String(count)}</p>
      <Button
        onClick={() => {
          dispatch({ type: 'add', payload: 2 })
        }}
      >
        修改
      </Button>
    </div>
  )
}

export default ContextTest
