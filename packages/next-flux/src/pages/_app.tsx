import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import 'normalize.css';
import Theme from '~/theme/theme';
import { store } from '~/store';
import { AppPropsWithLayout } from './_app.types';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
