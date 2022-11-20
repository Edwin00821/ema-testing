import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import store from 'redux/store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
