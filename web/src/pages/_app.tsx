// pages/_app.tsx
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';
import Head from 'next/head';
import MainContainer from '../components/MainLayoutContainer';
import { AuthContext, AuthProvider } from '@/contexts/AuthContextType';
import { useContext } from 'react';
import Login from '@/components/login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});
function Content({ Component, pageProps, router }: AppProps) {
  const {accessToken } = useContext(AuthContext)
  
  return accessToken ? (
    <MainContainer>
      <Component {...pageProps} router={router} />
    </MainContainer>
  ) : (
    <Login />
  );
}

export default function MyApp({ Component, pageProps,router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>AutoPericicado</title>
      </Head>
      <AuthProvider>
        <Content Component={Component} pageProps={pageProps} router={router} />
    </AuthProvider>
    </ThemeProvider>
  );
}
