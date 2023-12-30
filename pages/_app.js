"use client";

import '../styles/globals.css'
import Layout from './components/layout'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <main>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </>
  )
}

export default MyApp
