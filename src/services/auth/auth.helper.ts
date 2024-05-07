import Cookies from 'js-cookie';
import { IAuthData } from '@/services/auth/types';

export const saveToken = (accessToken: string) => {
  Cookies.set('accessToken', accessToken, { expires: 7 });
};

export const removeToken = () => {
  Cookies.remove('accessToken');
};

export const getToken = () => {
  return Cookies.get('accessToken');
};

export const saveToLocalStorage = (data: IAuthData) => {
  saveToken(data.accessToken);
  localStorage.setItem('user', JSON.stringify(data.user));
};
