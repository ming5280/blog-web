import axios, {
  CreateAxiosOptions,
  AxiosInstance,
  AxiosRequestConfig,
  RequestOptions,
  AxiosResponse,
  AxiosError,
  UploadFileParams,
  Result,
} from 'axios';
import qs from 'qs';
import { checkStatus } from './checkStatus';
import { ContentTypeEnum, RequestEnum, ResultEnum, ResultFieldEnum } from '/@/enums/httpEnum';
import { joinTimestamp, formatRequestDate, setObjToUrlParams } from './helper';
import { isFunction, isString } from '/@/utils/is';
import { AxiosCanceler } from './axiosCancel';
import { ElMessage, ElMessageBox } from 'element-plus';
import { cloneDeep } from 'lodash-es';
import sys from '../sysTips';
import Loading from '../loading';

const loading = new Loading({
  lock: true,
  text: '加载中...',
  background: 'rgba(255,255,255,0.5)',
  target: 'body',
});

/**
 * @description:  vaxios模块
 */
export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    // 创建axios实例
    this.axiosInstance = axios.create(options);
    // 初始化拦截、配置信息等
    this.setupInterceptors();
  }

  /**
   * @description: 请求之前处理config
   */
  beforeRequestHook(config, options) {
    const {
      apiUrl,
      joinPrefix,
      joinParamsToUrl,
      formatDate,
      joinTime = true,
      urlPrefix,
      isLoading,
    } = options;

    // 全局loading
    if (isLoading) {
      loading.show();
    }

    // 判断是否加入前缀
    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`;
    }

    // 请求地址
    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }

    // 发送的数据
    const params = config.params || {};
    const data = config.data || false;

    // 日期格式化
    formatDate && data && !isString(data) && formatRequestDate(data);

    // get请求以及其他请求方式处理
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        if (
          Reflect.has(config, 'data') &&
          config.data &&
          (Object.keys(config.data).length > 0 || config.data instanceof FormData)
        ) {
          config.data = data;
          config.params = params;
        } else {
          // 非GET请求如果没有提供data，则将params视为data
          config.data = params;
          config.params = undefined;
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(
            config.url as string,
            Object.assign({}, config.params, config.data),
          );
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params;
        config.params = undefined;
      }
    }

    return config;
  }

  /**
   * @description: 处理响应数据。如果数据不是预期格式，可直接抛出错误
   */
  transformResponseHook(res: AxiosResponse<Result>, options: RequestOptions) {
    const { isTransformResponse, isReturnNativeResponse, isLoading } = options;
    // 全局loading
    if (isLoading) {
      loading.hide();
    }

    // 返回原生响应头
    if (isReturnNativeResponse) {
      return res;
    }

    // 不进行任何处理，直接返回.需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      res.data;
    }

    // 没有data报错
    const { data } = res;
    if (!data) {
      throw new Error(sys.api.apiRequestFailed);
    }

    // 校验enum设置字段名，与接口返回的字段名是否对应
    const { CODE, MESSAGE, RESULT } = ResultFieldEnum;
    if (!Reflect.has(data, CODE) || !Reflect.has(data, MESSAGE) || !Reflect.has(data, RESULT)) {
      ElMessageBox.alert('请检查httpEnum设置返回结果字段名是否正确！', sys.api.successTip, {
        confirmButtonText: '关闭',
        type: 'error',
        showClose: false,
        closeOnClickModal: false,
      });
      throw new Error('请检查httpEnum设置返回结果字段名是否正确！');
    }

    const code = data[CODE],
      result = data[RESULT],
      message = data[MESSAGE];

    // code:200请求成功处理
    const hasSuccess = data && Reflect.has(data, CODE) && code === ResultEnum.SUCCESS;
    if (hasSuccess) {
      let successMsg = message;
      if (successMsg === null || successMsg === undefined || successMsg === '') {
        successMsg = '操作成功';
      }
      if (options.successMessageMode === 'modal') {
        ElMessageBox.alert(successMsg, sys.api.successTip, {
          confirmButtonText: '关闭',
          type: 'success',
          showClose: false,
          closeOnClickModal: false,
        });
      } else if (options.successMessageMode === 'message') {
        ElMessage.success(successMsg);
      }
      return result;
    }

    // 判断请求超时提示
    let timeoutMsg = '';
    switch (code) {
      case ResultEnum.TIMEOUT:
        timeoutMsg = sys.api.timeoutMessage;
        // 超时处理逻辑
        break;
      default:
        if (message) {
          timeoutMsg = message;
        }
    }

    // 进行报错提示
    if (options.errorMessageMode === 'modal') {
      ElMessageBox.alert(timeoutMsg, sys.api.errorTip, {
        confirmButtonText: '关闭',
        type: 'error',
        showClose: false,
        closeOnClickModal: false,
      });
    } else if (options.errorMessageMode === 'message') {
      ElMessage.error(timeoutMsg);
    }

    // 控制台报错 中断后面逻辑
    throw new Error(timeoutMsg || sys.api.apiRequestFailed);
  }

  /**
   * @description: 请求失败处理
   */
  requestCatchHook(e: Error, conf: CreateAxiosOptions, opt: RequestOptions) {
    // 关闭全局loading
    if (opt.isLoading) {
      loading.hide();
    }

    console.log('error:', e);
    console.log('conf:', conf);
    console.log('opt:', opt);

    return Promise<any>;
  }

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors(config, options) {
    const token = 'abcd';
    if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
      // jwt token
      (config as Recordable).headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token;
    }

    return config;
  }

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors(res: AxiosResponse<any>) {
    // 响应拦截 进行一些处理
    return res;
  }

  /**
   * @description: 请求拦截错误处理
   */
  requestInterceptorsCatch(error: any) {
    return Promise.reject(error);
  }

  /**
   * @description: 响应拦截错误处理 axiosInstance: AxiosInstance
   */
  responseInterceptorsCatch(error: any) {
    // 错误日志收集
    // const errorLogStore = useErrorLogStoreWithOut();
    // errorLogStore.addAjaxErrorInfo(error);

    const { response, code, message, config } = error || {};
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
    const msg: string = response?.data?.error?.message ?? '';
    const err: string = error?.toString?.() ?? '';
    let errMessage = '';

    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        errMessage = sys.api.apiTimeoutMessage;
      }
      if (err?.includes('Network Error')) {
        errMessage = sys.api.networkExceptionMsg;
      }

      if (errMessage) {
        if (errorMessageMode === 'modal') {
          ElMessageBox.alert(errMessage, sys.api.errorTip, {
            confirmButtonText: '关闭',
            type: 'error',
            showClose: false,
            closeOnClickModal: false,
          });
        } else if (errorMessageMode === 'message') {
          ElMessage.error(errMessage);
        }
        return Promise.reject(error);
      }
    } catch (error) {
      throw new Error(error as unknown as string);
    }

    // 错误状态检查
    checkStatus(error?.response?.status, msg, errorMessageMode);

    return Promise.reject(error);
  }

  /**
   * @description: axios拦截器逻辑
   */
  setupInterceptors() {
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = this;

    const axiosCanceler = new AxiosCanceler();

    // axios拦截器逻辑

    // 请求拦截
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      // 是否忽略请求
      // @ts-ignore
      const { ignoreCancelToken } = config.requestOptions; // requestOptions为手动添加，这里忽略ts检测
      const ignoreCancel =
        ignoreCancelToken !== undefined
          ? ignoreCancelToken
          : this.options.requestOptions?.ignoreCancelToken;

      !ignoreCancel && axiosCanceler.addPending(config);
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options);
      }
      return config;
    }, undefined);

    // 请求拦截错误
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(undefined, (error) => {
        return requestInterceptorsCatch(error);
      });

    // 响应拦截
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removePending(res.config);
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res);
      }
      return res;
    }, undefined);

    // 响应拦截错误
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, (error) => {
        return responseInterceptorsCatch(error); // this.axiosInstance
      });
  }

  /**
   * @description: 请求方法
   * @param {Object} config: 传入的axios配置信息
   * @param {Object} options: 传入的自定义封装的配置信息
   */
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    // 深拷贝
    let conf: CreateAxiosOptions = cloneDeep(config);

    // 获取封装的默认配置option
    const { requestOptions } = this.options;

    // 默认option与传入option合并
    const opt: RequestOptions = Object.assign({}, requestOptions, options);

    const { beforeRequestHook, requestCatchHook, transformResponseHook } = this;

    // 请求开始之前处理config
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt);
    }

    // 传入的axios配置放入自定义的配置信息
    conf.requestOptions = opt;

    // 支持form-data方式处理
    const headers = config.headers || this.options.headers;
    const contentType = headers?.['Content-Type'] || headers?.['content-type'];

    // data需改为动态 todo...
    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      conf = config;
    } else {
      conf = {
        ...config,
        data: qs.stringify(config.data, { arrayFormat: 'brackets' }),
      };
    }

    // 发送请求逻辑
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          // 请求返回的结果处理
          if (transformResponseHook && isFunction(transformResponseHook)) {
            try {
              const ret = transformResponseHook(res, opt);
              resolve(ret);
            } catch (err) {
              reject(err || new Error('request error!'));
            }
            return;
          }

          // transformResponseHook函数发生意外，直接返回结果😂
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          // 报错处理
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, conf, opt));
            return;
          }

          // 错误来自axios
          if (axios.isAxiosError(e)) {
            // 进行处理
          }

          reject(e);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: RequestEnum.GET }, options);
  }

  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: RequestEnum.POST }, options);
  }

  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: RequestEnum.PUT }, options);
  }

  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: RequestEnum.DELETE }, options);
  }

  /**
   * @description: 上传文件方法
   */
  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData();
    const customFilename = params.name || 'file';

    if (params.filename) {
      formData.append(customFilename, params.file, params.filename);
    } else {
      formData.append(customFilename, params.file);
    }

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data![key];
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item);
          });
          return;
        }

        formData.append(key, params.data![key]);
      });
    }

    return this.axiosInstance.request<T>({
      ...config,
      method: 'POST',
      data: formData,
      headers: {
        'Content-type': ContentTypeEnum.FORM_DATA,
        // @ts-ignore
        ignoreCancelToken: true,
      },
    });
  }
}
