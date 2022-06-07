import { AxiosResponse } from 'axios';

export interface ApiReturnBody<T = any> {
  code?: string | number;
  data: T;
  msg?: string;
}

export interface ApiAxiosResponse extends AxiosResponse {
  data: ApiReturnBody;
}
