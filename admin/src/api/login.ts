import axios from '@/utils/axios/index';

export interface LoginFormType {
  userName: string;
  password: string;
  type: 1 | 2;
}

export const adminLoginApi = (params: LoginFormType) =>
  axios.post('/admin/user/login', params);

export const storeLoginApi = (params: LoginFormType) =>
  axios.post('/admin/user/login', params);
