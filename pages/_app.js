import '../styles/globals.css'
import Layout from './components/layout'
import { Righteous } from '@next/font/google'


const righteous = Righteous({ subsets: ['latin'], weight: ['400'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
    <main>
    <style jsx global>{`
      html {
        font-family: ${righteous.style.fontFamily};
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
