import { LoginInterface } from '@/Types/login.interface';
import { AxiosInstance } from 'axios';

export const loginUser = async (api: AxiosInstance,email: string, senha: string): Promise<LoginInterface | null> => {
  
  try {
  const response = await api.post<LoginInterface>("/auth/login", {
    email,
    senha,
  });
  return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
}