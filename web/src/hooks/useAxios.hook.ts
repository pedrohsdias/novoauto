// api/axiosInstance.ts
import axios, { AxiosInstance } from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContextType';

export const useAxios = (): AxiosInstance => {
  const { accessToken, logout } = useContext(AuthContext);
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  });
  
  useEffect(() => {
    // Interceptor para adicionar o token nas requisições
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
          console.log('Token enviado:', accessToken);
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    
    return () => {
      // Remove o interceptor quando o componente desmonta
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken]);
  
  
  
  return api;
};
