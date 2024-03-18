import React from 'react'
import Form from 'antd/lib/form'
import ReactQuill from './ReactQuill'
import { Button } from 'antd'

export default function Index() {
  const handFinish = (val) => {
    console.log('val', val)
  }
  return (
    <div>
      <Form onFinish={handFinish}>
        {/* <Form.Item label="富文本" name="editor"> */}
        <ReactQuill />
        {/* </Form.Item> */}
        <Form.Item>
          <Button htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
