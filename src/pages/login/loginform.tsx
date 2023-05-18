import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import logo from '@/assets/logo.png'
import useBaseRequest from '@/hooks/useBaseRequest'
import { getlogin } from '@/api/login'
import { useNavigate } from 'react-router-dom'

const App: React.FC = () => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    getloginrun({ ...values })
  }

  const { run: getloginrun } = useBaseRequest(getlogin, {
    manual: true,
    onSuccess: () => {
      navigate('/')
    }
  })

  return (
    <div className="login-form">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <div>
            <img style={{ height: '100px' }} src={logo} />
          </div>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input
            style={{ width: '320px', height: '40px' }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            style={{ width: '320px', height: '40px' }}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
