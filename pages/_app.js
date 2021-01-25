import db from '../db.json';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/assets/styles/GlobalStyle';

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
