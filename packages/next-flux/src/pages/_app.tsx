import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import 'normalize.css';
import Theme from '~/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
