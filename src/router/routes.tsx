import { lazy, ReactNode } from 'react'
import { KeyOutlined } from '@ant-design/icons'
const Echarts = lazy(() => import('@/pages/echarts/index2'))
const Layout = lazy(() => import('@/components/layouts'))
const Home1 = lazy(() => import('@/pages/home/home1'))
const Home11 = lazy(() => import('@/pages/home/home1/home11'))
const Home2 = lazy(() => import('@/pages/home/home2'))
const Login = lazy(() => import('@/pages/login'))
const NoutFound = lazy(() => import('@/pages/errorpage/Notfound'))
const Design = lazy(() => import('@/pages/css/design'))
const Css = lazy(() => import('@/pages/css'))
const CssPage = lazy(() => import('@/pages/css/csspage'))
const Writejs = lazy(() => import('@/pages/javascript/writejs'))
const Datahandle = lazy(() => import('@/pages/javascript/datahandle'))
const Javascript = lazy(() => import('@/pages/javascript'))
const Demos = lazy(() => import('@/pages/demos'))
const FormList = lazy(() => import('@/pages/demos/formlist'))
const Hooks = lazy(() => import('@/pages/hook'))
const Memo = lazy(() => import('@/pages/hook/react.memo'))
// const Droptree = lazy(() => import('@/pages/demos/droptree/demo'))
const ProtableFormitem = lazy(
  () => import('@/pages/demos/protableFormitem/index.jsx')
)
const Uploaddemo = lazy(() => import('@/pages/demos/uploaddemo'))
const CssDemo = lazy(() => import('@/pages/css/cssdemo'))
const ReactRef = lazy(() => import('@/pages/demos/reactref'))
// const UseRef = lazy(() => import('@/pages/demos/useref'))
const SortCom = lazy(() => import('@/pages/demos/sortcom'))
const Sortablejs = lazy(() => import('@/pages/demos/sortablejs'))
const UseTransiyion = lazy(() => import('@/pages/demos/useTransition'))
const Hookdemos = lazy(() => import('@/pages/demos/hookdemos'))
const Callback = lazy(() => import('@/pages/hook/usecallback'))
// const Usememo = lazy(() => import('@/pages/hook/useMemo'))
const Mobx = lazy(() => import('@/pages/demos/mobx'))
const X6 = lazy(() => import('@/pages/antdv/X6'))
const G2 = lazy(() => import('@/pages/antdv/G2'))
const EventBus = lazy(() => import('@/pages/demos/eventbus'))
const Editor = lazy(() => import('@/pages/demos/wangeditoreditor/index'))
const Formediter = lazy(() => import('@/pages/demos/formediter/index'))
const Hotwords = lazy(() => import('@/pages/demos/Hotwords'))
const Antvx6 = lazy(() => import('@/pages/demos/antv_x6'))

export interface menuItem {
  name?: string
  path: string
  element?: ReactNode
  children?: menuItem[]
  [key: string]: any
}

export const routes: menuItem[] = [
  {
    name: '首页',
    path: '/',
    element: <Layout />,
    children: [
      {
        name: 'css',
        path: 'css',
        icon: <KeyOutlined />,
        element: <Css />,
        children: [
          {
            icon: <KeyOutlined />,
            name: '布局',
            path: 'design',
            element: <Design />
          },
          {
            icon: <KeyOutlined />,
            name: 'demo',
            path: 'cssDemo',
            element: <CssDemo />
          },
          {
            icon: <KeyOutlined />,
            name: 'csspage',
            path: 'cssPage',
            element: <CssPage />
          }
        ]
      },
      {
        name: 'JavaScript',
        icon: <KeyOutlined />,
        path: 'javascript',
        element: <Javascript />,
        children: [
          {
            icon: <KeyOutlined />,
            name: '手写JS',
            path: 'writejs',
            element: <Writejs />
          },
          {
            icon: <KeyOutlined />,
            name: 'JS数据处理',
            path: 'datahandle',
            element: <Datahandle />
          }
        ]
      },
      {
        name: '可视化',
        path: 'echarts',
        element: <Echarts />,
        icon: <KeyOutlined />,
        children: [
          {
            icon: <KeyOutlined />,
            name: 'G2',
            path: 'G2',
            element: <G2 />
          },
          {
            icon: <KeyOutlined />,
            name: 'X6',
            path: 'x6',
            element: <X6 />
          }
        ]
      },
      {
        name: '首页1',
        path: 'home1',
        element: <Home1 />,
        icon: <KeyOutlined />,
        children: [
          {
            name: '首页111',
            path: 'home33333',
            element: <Home11 />,
            icon: <KeyOutlined />
          }
        ]
      },
      {
        name: '首页2',
        path: '/home2',
        element: <Home2 />,
        icon: <KeyOutlined />
      },
      {
        name: '常用hook',
        path: '/hook',
        element: <Hooks />,
        children: [
          {
            name: 'usecallback',
            path: 'Callback',
            element: <Callback />,
            icon: <KeyOutlined />
          },
          {
            name: 'Reactmemo',
            path: 'memo',
            element: <Memo />,
            icon: <KeyOutlined />
          }
          // {
          //   name: 'Usememo',
          //   path: 'Usememo',
          //   element: <Usememo />,
          //   icon: <KeyOutlined />
          // }
        ],
        icon: <KeyOutlined />
      },
      {
        name: '测试demo',
        path: '/demos',
        element: <Demos />,
        children: [
          {
            name: '热词',
            path: 'Hotwords',
            element: <Hotwords />
          },
          {
            name: 'antvx6',
            path: 'antvx6',
            element: <Antvx6 />
          },
          {
            name: 'Formediter',
            path: 'Formediter',
            element: <Formediter />
          },
          {
            name: 'Editor',
            path: 'Editor',
            element: <Editor />
          },
          {
            name: 'EventBus',
            path: 'EventBus',
            element: <EventBus />
          },
          {
            name: 'hookdemos',
            path: 'hookdemos',
            element: <Hookdemos />
          },
          {
            name: 'formlist',
            path: 'formlist',
            element: <FormList />
          },
          {
            name: 'UseTransiyion',
            path: 'UseTransiyion',
            element: <UseTransiyion />
          },
          {
            name: 'Mobx',
            path: 'Mobx',
            element: <Mobx />
          },
          {
            name: 'protableFormitem',
            path: 'protableFormitem',
            element: <ProtableFormitem />
          },
          {
            name: 'uploaddemo',
            path: 'uploaddemo',
            element: <Uploaddemo />
          },
          {
            name: 'Reactref',
            path: 'reactref',
            element: <ReactRef />
          },
          // {
          //   name: 'useRef',
          //   path: 'useref',
          //   element: <UseRef />
          // },
          {
            name: 'sort',
            path: 'sort',
            element: <SortCom />
          },
          {
            name: 'sortablejs',
            path: 'sortablejs',
            element: <Sortablejs />
          }
        ],
        icon: <KeyOutlined />
      }
    ]
  },
  {
    name: '登录',
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NoutFound />
  }
]
