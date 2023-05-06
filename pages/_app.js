import '../styles/globals.css'
import Layout from './components/layout'
import { Six_Caps } from '@next/font/google'


const sixcaps = Six_Caps({ subsets: ['latin'], weight: ['400'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
    <main>
    <style jsx global>{`
      html {
        font-family: ${sixcaps.style.fontFamily};
      }
    `}</style>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </>
  )
}

export default MyApp
