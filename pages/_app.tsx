import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { BrowserRouter as Router } from 'react-router-dom';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  
  const isBrowser = typeof window !== 'undefined';

  return isBrowser ? (
    <SessionProvider session={session}>
      <Router>
        <Component {...pageProps} />
      </Router>
    </SessionProvider>
  ) : null;
}

export default MyApp
