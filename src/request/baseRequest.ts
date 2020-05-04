import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInterceptorManager,
  CancelTokenStatic,
} from "axios";
import { omit } from "lodash";
import { stringify } from "@/utils/stringify";

interface AxiosCancellation {
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
}

const request = axios.create({
  baseURL: "your base request url",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  transformRequest(x) {
    return stringify(x);
  },
});

request.interceptors.response.use((res) => {
  const { data, config } = res as AxiosResponse<WResponse>; // 从axios包装的res中取出后端的返回
  if (data.code !== 200) {
    return Promise.reject({
      data,
      config,
    });
  }

  return omit(data, ["code", "message"]) as any;
});

// 封装后的返回已经不再是axios的原生返回
export interface Request extends AxiosCancellation {
  (config: AxiosRequestConfig): Promise<any>;
  (url: string, config?: AxiosRequestConfig): Promise<any>;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  request<T = any>(
    config: AxiosRequestConfig
  ): Promise<Omit<T, keyof BaseResponse>>;
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Omit<T, keyof BaseResponse>>;
  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Omit<T, keyof BaseResponse>>;
  head(url: string, config?: AxiosRequestConfig): Promise<any>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<Omit<T, keyof BaseResponse>>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<Omit<T, keyof BaseResponse>>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<Omit<T, keyof BaseResponse>>;
}

export default (request as unknown) as Request;
