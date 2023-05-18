import React, { useEffect, useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Button, message, Upload, Result } from 'antd'
import useSetState from '@/hooks/usesetstae'

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    console.log('onchange', info)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  customRequest: (options) => {
    console.log('customRequest', options)
  }
}

const App: React.FC = () => {
  const [flag, setflag] = useSetState(false)
  const remainingDuration = useCountdown(3)
  useEffect(() => {
    // const { handle } = this.props
    const t = setInterval(() => {
      // 绑定好就清空定时器，并手动调用提交按钮到完成这一步
      console.log('aaaa')
      if (flag) {
        console.log('aaaa111')
        clearInterval(t)
      }
    }, 1000)
    return () => {
      clearInterval(t)
    }
  }, [flag])

  useEffect(() => {
    if (remainingDuration < 1) {
      console.log('111')
    }
  }, [remainingDuration])

  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Button
        onClick={() => {
          setflag(true)
        }}
      >
        111
      </Button>
      <Result
        status="success"
        title={`账号激活完成！${remainingDuration}秒后返回登录页`}
      />
    </div>
  )
}

export default App

export const useCountdown = (duration) => {
  const [remainingDuration, setRemainingDuration] = useState(duration)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (duration < 1) return
      setRemainingDuration((prevDuration) => {
        if (prevDuration) {
          return prevDuration - 1
        } else {
          return prevDuration
        }
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [duration])

  return remainingDuration
}
