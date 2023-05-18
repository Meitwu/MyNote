export interface dataParams {
  method: 'GET' | 'POST'
  action?: string
  qs?: object
  form?: object
  restfulParams?: object
  json?: object
  body?: object | string
  req?: object
  headers?: object
}
