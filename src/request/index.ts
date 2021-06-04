import axios, { AxiosResponse, AxiosRequestConfig, AxiosInterceptorManager, CancelTokenStatic } from 'axios';
import { omit } from 'lodash';

const request = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.response.use((res) => {
  const { data } = res as AxiosResponse<any>; // 从axios包装的res中取出后端的返回
  return {
    success: true,
    data,
  };
});

// 封装后的返回已经不再是axios的原生返回
export interface Request {
  (config: AxiosRequestConfig): Promise<any>;
  (url: string, config?: AxiosRequestConfig): Promise<any>;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  request<T = any>(config: AxiosRequestConfig): Promise<BaseResponse<T>>;
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<BaseResponse<T>>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<BaseResponse<T>>;
  head(url: string, config?: AxiosRequestConfig): Promise<any>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<BaseResponse<T>>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<BaseResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<BaseResponse<T>>;
}

export default request as unknown as Request;
