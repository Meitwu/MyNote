import axios from 'axios'

// export const baseURL = (isDev ? process.env.REACT_APP_BASE_URL : window.domain) || "";

const Service = axios.create({
  baseURL: '/api',
  timeout: 10000
})

//请求拦截器
Service.interceptors.request.use((config) => {
  const newConfig = config
  {
    return newConfig
  }
})

Service.interceptors.response.use((response) => {
  const { resultCode, code } = response.data || {}
  console.log('response', response)
  //easymock格式
  if (response.data?.result) {
    return Promise.resolve(response.data)
  }
  if (resultCode || code || response.status >= 300) {
    return Promise.reject(response)
  }
  return Promise.reject(response)
})

export { Service as axios }
