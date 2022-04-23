import type { AppProps } from 'next/app'

import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import * as t from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  const theme = t.light

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next App</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
