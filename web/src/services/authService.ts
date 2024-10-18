import { ILoginResponse } from '@/Types/ILoginResponse';
import { AxiosInstance } from 'axios';

export const loginUser = async (api: AxiosInstance,email: string, senha: string): Promise<ILoginResponse | null> => {
  
  try {
  const response = await api.post<ILoginResponse>("/auth/login", {
    email,
    senha,
  });
  return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
}