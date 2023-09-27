import { Button, Divider, Table } from 'antd'
import React from 'react'
import { useAntdColumnResize } from 'react-antd-column-resize'
import { ProTable } from '@ant-design/pro-components'

const App = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      align: 'center'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 300
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      fixed: 'right'
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Doe',
      age: 32,
      address: '123 Street, City',
      phone: '1588553336'
    },
    {
      key: '2',
      name: 'Jane Smith',
      age: 28,
      address: '456 Road, Town',
      phone: '1588553336'
    }
  ]

  const { resizableColumns, components, tableWidth, resetColumns } =
    useAntdColumnResize(() => {
      return { columns, minWidth: 100 }
    }, [])

  return (
    <div className="app">
      <Button onClick={resetColumns}>重置Columns</Button>
      <Divider />
      <ProTable
        columns={resizableColumns}
        dataSource={data}
        components={components}
        bordered
        scroll={{ x: tableWidth }}
      />
    </div>
  )
}

export default App