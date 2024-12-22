import { LoginInterface } from '@/Types/login.interface';
import axios from 'axios';

export const loginUser = async (email: string, senha: string): Promise<LoginInterface | number> => {

  try {
    const response = await axios.post<LoginInterface>(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      email,
      senha,
    });

    return response.data as LoginInterface
  } catch (error) {
    console.error("Erro ao fazer login:",error?.response?.data?.statusCode);
    if (!error?.response?.data?.statusCode) {
      console.error(error);
    }
    return error?.response?.data?.statusCode ?? 500
  }
}