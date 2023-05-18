import { Form, Input, Button, Table, Select } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
// import './index.css'

const TableEditForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
  }

  const getColumns = (
    add: {
      (defaultValue?: any, insertIndex?: number | undefined): void
      (): void
    },
    remove: { (index: number | number[]): void; (arg0: any): void }
  ) => {
    return [
      {
        title: 'key',
        dataIndex: 'key'
      },
      {
        title: 'a链接',
        dataIndex: 'alink',
        render(text, field, index) {
          // 注意：这里的 field 不是当前行数据，而是 Form.List field
          return (
            <Form.Item shouldUpdate={true}>
              {({ getFieldValue }) => {
                // 获取当前行数据，然后渲染你要的数据
                const record = (getFieldValue('tableForm') || [])?.[index] || {}
                return (
                  <a
                    target="_blank"
                    href={`/view-personne/list/detail?staffId=${
                      record?.id || ''
                    }`}
                    rel="noreferrer"
                  >
                    {record?.name}
                  </a>
                )
              }}
            </Form.Item>
          )
        }
      },
      {
        title: '姓名',
        dataIndex: 'name',
        render(text, field) {
          // 这里的写法是 Form.List 的方法 https://ant.design/components/form-cn/#components-form-demo-dynamic-form-items
          return (
            <Form.Item
              rules={[{ required: true, message: '请输入姓名' }]}
              name={[field.name, 'name']}
              fieldKey={[field.fieldKey, 'name']}
            >
              <Input placeholder="请输入姓名" allowClear />
            </Form.Item>
          )
        }
      },
      {
        title: '手机号',
        dataIndex: 'tel',
        render(text, field) {
          return (
            <Form.Item
              rules={[{ required: true, message: '请输入手机号' }]}
              name={[field.name, 'tel']}
              fieldKey={[field.fieldKey, 'tel']}
            >
              <Input placeholder="请输入姓名" allowClear />
            </Form.Item>
          )
        }
      },
      {
        title: '学历',
        dataIndex: 'education',
        render(text, field) {
          return (
            <Form.Item
              rules={[{ required: true, message: '请选择学历' }]}
              name={[field.name, 'education']}
              fieldKey={[field.fieldKey, 'education']}
            >
              <Select placeholder="请输入姓名" allowClear>
                <Select.Option value="1">专科</Select.Option>
                <Select.Option value="2">本科</Select.Option>
                <Select.Option value="3">研究生</Select.Option>
              </Select>
            </Form.Item>
          )
        }
      },
      {
        title: '操作',
        dataIndex: 'operate',
        className: 'operate',
        width: 120,
        render(text, field) {
          return (
            <>
              <PlusOutlined onClick={() => add()} />
              <MinusCircleOutlined
                style={{ marginLeft: 10 }}
                onClick={() => remove(field.name)}
              />
            </>
          )
        }
      }
    ]
  }

  return (
    <>
      <Form
        className="table-edit-form"
        form={form}
        onFinish={onFinish}
        initialValues={{
          tableForm: [{}, {}]
        }}
      >
        <Form.List name="tableForm">
          {(fields, { add, remove }) => {
            // 将Table视为 Form.List 中循环的 Form.Item
            return (
              <Table
                dataSource={fields}
                columns={getColumns(add, remove)}
                rowKey="key"
                pagination={false}
              />
            )
          }}
        </Form.List>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default TableEditForm
