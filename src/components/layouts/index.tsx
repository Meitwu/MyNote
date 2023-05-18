import React, { useEffect, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DropboxOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme, ConfigProvider } from 'antd'
import logo from '@/assets/logo.png'
import { Outlet, useNavigate } from 'react-router-dom'
import Logincom from '@/components/layouts/logininfo'
import { routes, menuItem } from '@/router/routes'
import { Filterparent } from '@/utils/method'
import BreadcrumbCom from '../Breadcrumb'
import ToolsDrawer from '@/components/Tools'

// console.log('routes', routes)
const { Header, Sider, Content } = Layout

const Fn: any = (data: menuItem[]) =>
  data.map((item) => {
    return {
      ...item,
      key: item.path,
      label: item.name,
      children: item.children ? Fn(item.children) : undefined
    }
  })

export interface navtype {
  href: string
  label: string
}

const layouts: React.FC = () => {
  const navigator = useNavigate()
  const [navdata, setnavdata] = useState<navtype[]>([])
  const [collapsed, setCollapsed] = useState(false)
  const [toolsopen, settoolsopen] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  useEffect(() => {
    console.log('navdata', navdata)
  }, [navdata])

  const MenuNav = (e: any) => {
    const { keyPath } = e
    const { parentkey, parentlabel } = e.item.props
    const data = parentkey.map((item: [string], i: number) => ({
      href: [...parentkey].splice(0, i + 1).join('/'),
      label: parentlabel[i]
    }))
    setnavdata(data)
    navigator(keyPath.reverse().join('/'))
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0b96b'
        }
      }}
    >
      <Layout style={{ width: '100%' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{ textAlign: 'center' }} className="logo">
            <img style={{ height: !collapsed ? '100px' : '50px' }} src={logo} />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            onSelect={MenuNav}
            defaultSelectedKeys={[(Fn(routes[0].children) || []).key]}
            // items={Fn(routes[0].children)}
            items={Filterparent(Fn(routes[0].children))}
          />
        </Sider>

        <Layout style={{ width: 'calc(100% - 200px)' }} className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0px 24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed)
                  }
                )}
                <BreadcrumbCom dataset={navdata} />
              </div>
              <div style={{ display: 'flex' }}>
                <DropboxOutlined
                  onClick={() => {
                    settoolsopen(true)
                  }}
                  style={{
                    color: '#ff8181',
                    fontSize: '20px',
                    padding: '10px'
                  }}
                />
                <Logincom />
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              height: 'calc(100vh - 112px)',
              background: colorBgContainer
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <ToolsDrawer open={toolsopen} setopen={settoolsopen} />
    </ConfigProvider>
  )
}

export default layouts
