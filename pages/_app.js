import '../styles/globals.css'
import Layout from './components/layout'
import { Staatliches } from '@next/font/google'


const righteous = Staatliches({ subsets: ['latin'], weight: ['400'], display: 'swap'})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <main className={righteous.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </>
  )
}

export default MyApp
