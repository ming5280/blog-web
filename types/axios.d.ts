import { AxiosRequestConfig } from 'axios';

/**
 * @description: 自定义扩展axios模块
 */
declare module 'axios' {
  export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
  export type SuccessMessageMode = ErrorMessageMode;

  export interface CreateAxiosOptions extends AxiosRequestConfig {
    // 请求header里面的toekn前缀 例如：Bearer xxxxxxxxx
    authenticationScheme?: string;
    // transform?: AxiosTransform;
    requestOptions?: RequestOptions;
  }

  export interface RequestOptions {
    // 请求url
    apiUrl?: string;
    // 请求加入的前缀路径
    urlPrefix?: string;
    // psot 请求将参数拼接到url
    joinParamsToUrl?: boolean;
    // 格式化请求参数的时间
    formatDate?: boolean;
    // 是否需要对返回的response进行处理
    isTransformResponse?: boolean;
    // 是否返回原生response
    isReturnNativeResponse?: boolean;
    // 是否加入前缀
    joinPrefix?: boolean;
    // 错误消息提示类型
    errorMessageMode?: ErrorMessageMode;
    // 成功消息提示类型
    successMessageMode?: SuccessMessageMode;
    // 是否加入时间戳
    joinTime?: boolean;
    // 是否进行qs，解析json
    isParseToJson?: boolean;
    // 是否忽略重复请求
    ignoreCancelToken?: boolean;
    // 是否携带token
    withToken?: boolean;
    // 请求重试机制
    // retryRequest?: RetryRequest;
    // 是否开启全局loading
    isLoading?: boolean;
  }

  // export interface RetryRequest {
  //   isOpenRetry: boolean;
  //   count: number;
  //   waitTime: number;
  // }
  export interface Result<T = any> {
    code: number;
    type: 'success' | 'error' | 'warning';
    message: string;
    result: T;
  }

  export interface UploadFileParams {
    // 其他参数
    data?: Recordable;
    // 文件名
    name?: string;
    // 文件
    file: File | Blob;
    // 文件名 可能会使用到第三个参数去发送文件名称（通过Content-Disposition头发送到服务器）。如果没有指定第三个参数或这个参数不被支持的话，第三个参数默认是”blob”
    filename?: string;
    [key: string]: any;
  }
}
