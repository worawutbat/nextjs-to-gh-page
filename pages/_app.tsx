/* eslint-disable react/prop-types */
// import App from 'next/app'

import type { AppProps } from 'next/app';
import Navbar from '~/components/Navbar';

export interface IPageControllerProps {
  ssgProps?: unknown;
}

function MyApp({ Component, pageProps }: AppProps<IPageControllerProps>) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
