import { Button } from 'antd'
import { useContext } from 'react'
import { UserContext } from '../store/context'
function ContextTest() {
  const {
    state: { count, theme },
    dispatch
  } = useContext(UserContext)

  return (
    <div>
      <p>{String(count)}</p>
      <p>{theme}</p>
      <Button
        onClick={() => {
          dispatch({ type: 'add', payload: 3 })
        }}
      >
        修改
      </Button>
      <Button type="primary">primary</Button>
    </div>
  )
}

export default ContextTest
