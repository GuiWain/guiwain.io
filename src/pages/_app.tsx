import type { AppProps } from 'next/app'

import Head from 'next/head'

import GlobalStyles from 'styles/global'
import Layout from 'templates/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
      </Head>

      <Layout>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </Layout>
    </>
  )
}

export default App
