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
import {LoadingProvider} from "@/contexts/LoadingContext";
import LoadContextHelper from "@/components/load/LoadContextHelper";

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
      <LoadContextHelper/>
      <Component {...pageProps} router={router} />
    </MainContainer>
  ) : (
    <Login />
  );
}

export default function AutoPericiado({ Component, pageProps,router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>AutoPericiado</title>
      </Head>
      <AuthProvider>
        <LoadingProvider>
          <Content Component={Component} pageProps={pageProps} router={router} />
        </LoadingProvider>
    </AuthProvider>
    </ThemeProvider>
  );
}
