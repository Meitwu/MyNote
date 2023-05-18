import { useRequest } from 'ahooks'
import { axios } from '@/utils/axios'
import { Options } from 'ahooks/lib/useRequest/src/types'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

//paramFn表示带有接口路径的函数
export default function useBaseRequest(
  paramFn: { apply: (arg0: undefined, arg1: any[]) => AxiosRequestConfig<any> },
  options: Options<AxiosResponse<any, any>, any[]> | undefined
) {
  return useRequest(
    (...args) => axios(paramFn.apply(undefined, [...args])),
    options
  )
}
