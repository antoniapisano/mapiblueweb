import '../styles/globals.css'
import Layout from './components/layout'
import { Six_Caps } from '@next/font/google'

const sixcaps = Six_Caps({ subsets: ['latin'], weight: ['400'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={sixcaps.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  )
}

export default MyApp
