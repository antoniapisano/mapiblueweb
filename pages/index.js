import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import YoutubeEmbed from './YoutubeEmbed'

export default function Home() {
  return (
    <>
    <div style={{
      zIndex: -1,
      position: "fixed",
      width: "100vw",
      height: "100vh",
      opacity: "65%"
    }}>
      <Image 
        src="/Guitarbackground2.webp"
        alt="Guitar background by Shinnosuke Kawabe https://unsplash.com/photos/idya-9U4ZJM"
        fill cover
      />
    </div>
    <div className={styles.container}>
      <Head>
        <title>James Evans Official Website UK Blues Artist</title>
      </Head>
      
      <div style={{
      display: "flex",
      padding: "none",
      margin: "none",
      position: "fixed",
      width: "100vw",
      height: "100vh",
    }}>
      <h1 className={styles.thistitle}>James<br />Evans</h1>
      <YoutubeEmbed embedId="Hy4qV0tpI8M" />

      </div>
    
      
      


      
    </div>
    </>
  )
}
