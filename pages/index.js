import Head from 'next/head'
import styles from '../styles/Home.module.css'
import YoutubeEmbed from './YoutubeEmbed'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Evans Official Website UK Blues Artist</title>
      </Head>
      <h1 className={styles.thistitle}>James Evans</h1>
      <YoutubeEmbed embedId="Hy4qV0tpI8M" />

      
    </div>
  )
}
