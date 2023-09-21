import React, { useCallback } from 'react'
import { Form, Input, Button } from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import Index from '../useref'

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values)
  }

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...field}
                label="User Name"
                name={[field.name, 'name']}
                fieldKey={[field.fieldKey, 'name']}
                rules={[{ required: true, message: 'Missing user name' }]}
              >
                <Input placeholder={`User name${index}`} />
                <Button
                  type="dashed"
                  onClick={() => {
                    console.log('fieldsadd', fields)
                    add()
                    console.log('fieldsadd', fields)
                  }}
                  block
                  icon={<PlusOutlined />}
                >
                  Add user
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    remove(2)
                    console.log('fieldsremove', fields)
                  }}
                  block
                  icon={<PlusOutlined />}
                >
                  remove user
                </Button>
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => {
                  console.log('fieldsadd', fields)
                  add()
                  console.log('fieldsadd', fields)
                }}
                block
                icon={<PlusOutlined />}
              >
                Add user
              </Button>
              <Button
                type="dashed"
                onClick={() => {
                  remove(2)
                  console.log('fieldsremove', fields)
                }}
                block
                icon={<PlusOutlined />}
              >
                remove user
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Demo
