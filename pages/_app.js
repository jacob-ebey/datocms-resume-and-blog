import 'isomorphic-unfetch'
import 'highlight.js/styles/nord.css'

import { AbFlagsProvider } from '../contexts/ab-flags'
import { getAbFlags } from '../lib/api'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <AbFlagsProvider fetchFlags={getAbFlags}>
      <Component {...pageProps} />
    </AbFlagsProvider>
  )
}

export default MyApp
