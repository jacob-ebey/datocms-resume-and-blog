import 'isomorphic-unfetch'
import Head from 'next/head'

import { AbFlagsProvider } from '../contexts/ab-flags'
import { getAbFlags } from '../lib/api'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AbFlagsProvider fetchFlags={getAbFlags}>
        <Component {...pageProps} />
      </AbFlagsProvider>
    </>
  )
}

export default MyApp
