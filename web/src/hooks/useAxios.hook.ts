// api/axiosInstance.ts
import axios, { AxiosInstance } from "axios";
import { useContext } from "react";
import { AuthContext } from '@/contexts/AuthContextType';

let api: AxiosInstance;

export const useAxios = (): AxiosInstance => {
  const { accessToken, logout } = useContext(AuthContext);
  
  if (!api) {
    api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
    });
    
    // Configuração do interceptor para adicionar o token
    api.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        } else {
          console.warn("Nenhum token encontrado no contexto");
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    
    // Configuração para interceptar respostas e lidar com erros de autenticação
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          console.warn("Token expirado ou inválido, redirecionando para login.");
          logout();
        }
        return Promise.reject(error);
      }
    );
  }
  
  return api;
};
