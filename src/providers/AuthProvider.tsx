// import Cookies from 'js-cookie'
import { FC, useState, Dispatch, SetStateAction, createContext, PropsWithChildren, useEffect } from 'react';

import { TypeUser } from '@/services/auth/types';
import { useRouter } from 'next/router';
import { getToken } from '@/services/auth/auth.helper';

export interface IContext {
  user: TypeUser;
  setUser: Dispatch<SetStateAction<TypeUser>> | null;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUser>(null);
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = getToken();
    if (accessToken) {
      const user = JSON.parse(localStorage.getItem('user') || '');

      setUser(user);
    }
  }, []);

  useEffect(() => {
    const accessToken = getToken();
    if (!accessToken) {
      setUser(null);
    }
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
