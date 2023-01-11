import Axios, { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

export type resultType = {
  accessToken?: string;
};

export type RequestMethods = Extract<Method, 'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'>;

export interface kHttpError extends AxiosError {
  isCancelRequest?: boolean;
}

export interface kHttpResponse extends AxiosResponse {
  config: kHttpRequestConfig;
}

export interface kHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: kHttpRequestConfig) => void;
  beforeResponseCallback?: (response: kHttpResponse) => void;
}

export default class kHttp {
  request<T>(method: RequestMethods, url: string, param?: AxiosRequestConfig, axiosConfig?: kHttpRequestConfig): Promise<T>;
  post<T, P>(url: string, params?: T, config?: kHttpRequestConfig): Promise<P>;
  get<T, P>(url: string, params?: T, config?: kHttpRequestConfig): Promise<P>;
}
