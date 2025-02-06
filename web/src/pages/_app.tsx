// pages/_app.tsx
import * as React from 'react';
import {useContext} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {AppProps} from 'next/app';
import Head from 'next/head';
import MainContainer from '../components/MainLayoutContainer';
import {AuthContext, AuthProvider} from '@/contexts/AuthContextType';
import Login from '@/components/login';
import {LoadingProvider} from "@/contexts/LoadingContext";
import LoadContextHelper from "@/components/load/LoadContextHelper";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3088c7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#174696',
      contrastText: '#ffffff',
    },
    success: {
      main: '#91c934',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
    // Use cor customizada "neutral" em vez de "default"
    neutral: {
      main: '#555555',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'DM Sans, Arial, sans-serif',
    fontSize: 14,
    fontWeightRegular: 400,
    h1: { fontSize: '2.5rem', fontWeight: 600 },
    h2: { fontSize: '2rem', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#3088c7',
          color: '#ffffff',
          '&:hover': { backgroundColor: '#2573a9' },
        },
        outlinedPrimary: {
          borderColor: '#3088c7',
          color: '#3088c7',
          '&:hover': {
            borderColor: '#2573a9',
            color: '#2573a9',
          },
        },
        textPrimary: {
          color: '#3088c7',
          '&:hover': { color: '#2573a9' },
        },
        containedSecondary: {
          backgroundColor: '#174d96',
          color: '#ffffff',
          '&:hover': { backgroundColor: '#123a73' },
        },
        outlinedSecondary: {
          borderColor: '#174d96',
          color: '#174d96',
          '&:hover': {
            borderColor: '#123a73',
            color: '#123a73',
          },
        },
        textSecondary: {
          color: '#174d96',
          '&:hover': { color: '#123a73' },
        },
        // Substitua "default" por "neutral" (color="neutral")
        containedNeutral: {
          backgroundColor: '#555555',
          color: '#ffffff',
          '&:hover': { backgroundColor: '#444444' },
        },
        outlinedNeutral: {
          borderColor: '#555555',
          color: '#555555',
          '&:hover': {
            borderColor: '#444444',
            color: '#444444',
          },
        },
        textNeutral: {
          color: '#555555',
          '&:hover': { color: '#444444' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        },
      },
    },
  },
})
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
