import { CreateAxiosOptions } from 'axios';
import { VAxios } from './vaxios';
import { ContentTypeEnum } from '/@/enums/httpEnum';
import { cloneDeep } from 'lodash-es';
import { isObject } from '/@/utils/is';

const defConfig = {
  // token前缀
  authenticationScheme: 'Bearer',
  // 响应时间
  timeout: 10 * 1000,
  // 基础接口地址
  // baseURL: globSetting.apiUrl,
  // 数据格式
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: {
    // 请求url
    apiUrl: import.meta.env.VITE_BASE_API_URL,
    // 请求加入的前缀路径
    urlPrefix: import.meta.env.VITE_API_PREFIX,
    // psot 请求将参数拼接到url
    joinParamsToUrl: false,
    // 格式化请求参数的时间
    formatDate: false,
    // 是否需要对返回的response进行处理，直接获取code，data，message这些信息
    isTransformResponse: true,
    // 是否返回原生response
    isReturnNativeResponse: false,
    // 是否加入前缀
    joinPrefix: true,
    // 错误消息提示类型 none | message | modal
    errorMessageMode: 'message',
    // 成功消息提示类型 none | message | modal
    successMessageMode: 'none',
    // 是否加入时间戳
    joinTime: true,
    // 是否进行qs，解析json
    isParseToJson: false,
    // 是否忽略重复请求
    ignoreCancelToken: true,
    // 是否携带token
    withToken: true,
    // 请求重试机制
    // retryRequest: {
    //   isOpenRetry: true,
    //   count: 5,
    //   waitTime: 100,
    // },
    // 是否开启全局loading
    isLoading: false,
  },
};

// 深度合并
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  const res: any = cloneDeep(src);
  for (key in target) {
    res[key] = isObject(res[key]) ? deepMerge(res[key], target[key]) : (res[key] = target[key]);
  }
  return res;
}

// 创建vaxios实例方法
function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(deepMerge(defConfig, opt || {}));
}

export const http = createAxios();

// 其他
// export const otherHttp = createAxios({
//   requestOptions: {
//     apiUrl: 'xxx',
//     urlPrefix: 'xxx',
//   },
// });
