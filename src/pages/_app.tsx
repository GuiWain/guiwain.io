import type { AppProps } from 'next/app'

import Head from 'next/head'

import GlobalStyles from 'styles/global'
import Layout from 'templates/Layout'

function App({ Component, pageProps }: AppProps) {
  const footerModifier = pageProps?.footer ? 'minimal' : 'default'

  return (
    <>
      <Head>
        <title>GuiWain</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
      </Head>

      <Layout footer={footerModifier}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </Layout>
    </>
  )
}

export default App
