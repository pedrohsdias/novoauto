// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Solução em vistorias automotivas" />
        <link rel="icon" href="/assets/images/favicon.ico" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
