import {
  useReducer,
  Suspense,
  JSXElementConstructor,
  ReactElement,
  ReactFragment
} from 'react'
import { reducer } from './store/reducer'
import { UserContext } from './store/context'
import { state as initstate } from './store/state'
import { routes, menuItem } from './router/routes'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AuthRoute from '@/router/AuthRoute'
import { ConfigProvider } from 'antd'

const Suspensebox = (
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | null
    | undefined
) => {
  return <Suspense>{children}</Suspense>
}

function App() {
  const [state, dispatch] = useReducer(reducer, initstate)

  const RouteAuthFun = (routeList: menuItem[]) => {
    return routeList.map((item: menuItem) => {
      return (
        <Route
          path={item.path}
          element={
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#00b96b'
                }
              }}
            >
              <AuthRoute
              //  auth={item.auth} path={item.path} key={item.path}
              >
                <>{Suspensebox(item.element)}</>
              </AuthRoute>
            </ConfigProvider>
          }
          key={item.path}
        >
          {/* 递归调用，因为可能存在多级的路由 */}
          {item?.children && RouteAuthFun(item.children)}
        </Route>
      )
    })
  }
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <HashRouter>
        <Routes>{RouteAuthFun(routes)}</Routes>
      </HashRouter>
    </UserContext.Provider>
  )
}

export default App
