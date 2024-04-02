import { darkTheme } from '@/themes';
import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
