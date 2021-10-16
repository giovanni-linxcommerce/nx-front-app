import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/global';
import BaseGlobalStyle from '@/styles/BaseGlobalStyle';
import theme from '@/styles/theme';

const CheckoutApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <BaseGlobalStyle {...pageProps} />
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default CheckoutApp;
