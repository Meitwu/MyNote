import { useState } from 'react'
import useThrottle from '.'
import { Button } from 'antd'

const Index: React.FC = () => {
  const [userQuery, setUserQuery] = useState(1)
  const delayedQuery = useThrottle((q) => setUserQuery(q), 1000)

  return (
    <div>
      <h2>节流hook</h2>
      <div>{userQuery}</div>
      <Button
        onClick={() => {
          delayedQuery(userQuery + 1)
        }}
      >
        累加
      </Button>
    </div>
  )
}
export default Index
