import 'isomorphic-unfetch'
import Head from 'next/head'

import { AbFlagsProvider } from '../contexts/ab-flags'
import { getAbFlags } from '../lib/api'
import '../styles/index.css'

export function reportWebVitals(metric) {
  console.info(`${metric.value.toString().padEnd(6, ' ')} | ${metric.name}`)
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AbFlagsProvider fetchFlags={getAbFlags}>
        <Component {...pageProps} />
      </AbFlagsProvider>
    </>
  )
}
