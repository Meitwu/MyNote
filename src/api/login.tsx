const apis = {
  login:
    'https://mock.mengxuegu.com/mock/63ff19437c016026ff2b9155/example/login'
}

export function getlogin(parameters = {}) {
  return {
    url: apis.login,
    method: 'GET',
    params: { ...parameters }
  }
}
