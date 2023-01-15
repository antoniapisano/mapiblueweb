import '../styles/globals.css'
import Layout from './components/layout'
import { SixCaps } from '@next/font/google'

const sixcaps = SixCaps({ subsets: ['latin'] })

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
