import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { ApiAxiosResponse } from './type';

const configData: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // 携带 token
    // Authorization: 'Bearer ' + getToken(),
  },
};

class Request {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    // 请求拦截
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => res,
      (err: any) => err,
    );
    // 响应拦截
    this.instance.interceptors.response.use(
      (res: ApiAxiosResponse): any => res.data,
      (err: any) => err,
    );
  }
}

const api = new Request(configData);
export default api.instance;
