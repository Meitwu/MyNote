import React from 'react'
import { Button, notification } from 'antd'
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification()
  const openNotification = (
    message: string,
    key: string,
    description: React.ReactNode
  ) => {
    api.success({
      key,
      message: message,
      description: description
    })

    setTimeout(() => {
      api.success({
        key,
        message: message,
        description: description
      })
    }, 1000)
  }

  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => openNotification('success', '1', '111')}
      >
        Open the notification box
      </Button>
    </>
  )
}

export default App
