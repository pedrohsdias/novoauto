import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { loginUser } from '@/services/authService';
import MainSkeleton from '@/components/MainLayoutContainer/skeleton';
import {TokenDataInterface} from "@/Types/tokenData.interface";
import {LoginInterface} from "@/Types/login.interface";

interface AuthContextType {
  accessToken: string | null;
  refreshToken?: string | null;
  tokenData: TokenDataInterface | null;
  login: (email:string,senha:string) => Promise<number|null>;
  logout: () => void;
  isAccessTokenExpired: () => boolean;
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  refreshToken: null,
  tokenData: null,
  login: async ():Promise<number|null> => {},
  logout: () => {},
  isAccessTokenExpired: () => true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [tokenData, setTokenData] = useState<TokenDataInterface | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const isAccessTokenExpired = (): boolean => {
    if (!accessToken) return true;
    
    try {
      const decoded = jwtDecode<JwtPayload>(accessToken);
      if (decoded.exp) {
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
      }
      return false;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return true;
    }
  };
  
  const login = async (email:string,senha:string) : Promise<number|null> => {
    const tokens : LoginInterface | number = await loginUser(email,senha)

    if(typeof tokens === 'number') {
      return tokens;
    }

    localStorage.setItem('accessToken', tokens.access_token)
    localStorage.setItem('refreshToken', tokens?.refresh_token || '')
    console.log('escreveu token')
    setAccessToken(tokens.access_token);
    setRefreshToken(tokens?.refresh_token|| null)

    await router.push('/')

    return null
  };
  
  const logout = () => {
    setTokenData(null)
    console.log('apagou token')
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/login');
  };
  
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      const decoded = jwtDecode<TokenDataInterface>(storedAccessToken)
      setTokenData(decoded)
    }
    setLoading(false)
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken,tokenData, login, logout, isAccessTokenExpired }}>
      {loading? <MainSkeleton/> : children}
    </AuthContext.Provider>
  );
};
