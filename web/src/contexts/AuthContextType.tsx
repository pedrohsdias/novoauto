// context/AuthContext.tsx
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { loginUser } from '@/services/authService';
import { useAxios } from '@/hooks/useAxios.hook';
import MainSkeleton from '@/components/MainLayoutContainer/skeleton';

interface AuthContextType {
  accessToken: string | null;
  refreshToken?: string | null;
  login: (email:string,senha:string) => Promise<void>;
  logout: () => void;
  isAccessTokenExpired: () => boolean; // Função para verificar se o token está expirado
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  refreshToken: null,
  login: async () => {},
  logout: () => {},
  isAccessTokenExpired: () => true, // Por padrão, assume que o token está expirado
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  const api = useAxios();
  // Função para decodificar o token e verificar a expiração
  const isAccessTokenExpired = (): boolean => {
    if (!accessToken) return true;
    
    try {
      const decoded = jwtDecode<JwtPayload>(accessToken);
      if (decoded.exp) {
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime; // Retorna true se o token está expirado
      }
      return false;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return true;
    }
  };
  
  // Função de login que armazena o token no estado e no localStorage
  const login = async (email:string,senha:string) => {
    const tokens= await loginUser(api,email,senha)
    if(tokens !==null) {
      setAccessToken(tokens.access_token);
      setRefreshToken(tokens?.refresh_token|| null);
      localStorage.setItem('accessToken', tokens.access_token);
      localStorage.setItem('refreshToken', tokens?.refresh_token || '');
      router.push('/')
    }
  };
  
  // Função de logout que limpa o token do estado e do localStorage
  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/login');
  };
  
  // Efeito para carregar o token do localStorage ao iniciar o app
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
    setLoading(false)
  }, []);
  
  //todo - Efeito para verificar se o token precisa ser renovado ao iniciar o app
  // useEffect(() => {
  //   if (accessToken && isAccessTokenExpired()) {
  //     // Se o token expirou, tentar renová-lo
  //     refreshAccessToken();
  //   }
  // }, [accessToken]);
  
  //todo - Função para renovar o token (simulada aqui, você precisaria conectar a uma API real)
  // const refreshAccessToken = async () => {
  //   console.log('Token expirado, renovando...');
  //   try {
  //     const response = await fetch('/api/refresh-token'); // Simule uma rota de renovação de token
  //     const data = await response.json();
  //
  //     if (data.access_token) {
  //       login(data.access_token); // Atualiza o token com o novo
  //     } else {
  //       logout(); // Caso não consiga renovar o token, força o logout
  //     }
  //   } catch (error) {
  //     console.error('Erro ao renovar o token:', error);
  //     logout(); // Força o logout se houver erro na renovação
  //   }
  // };
  
  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, login, logout, isAccessTokenExpired }}>
      {loading? <MainSkeleton/> : children}
    </AuthContext.Provider>
  );
};
