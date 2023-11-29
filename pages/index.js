import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Mapi Tarot Readings</title>
      </Head>

     <div className={styles.gridcontainer}>
          <h1 className={styles.thistitle}>Mapi Tarot Reading</h1>
          <button>English</button>
            <button>Español</button>
      </div>
    
      
      


      
    </div>
    
  )
}
