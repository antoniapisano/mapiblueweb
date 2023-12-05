import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Engcard from './components/Engcard'
import Espcard from './components/Espcard'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Mapi Tarot Readings</title>
      </Head>

     <div className={styles.gridcontainer}>
          <h1 className={styles.thistitle}>Mapi Tarot Reading</h1>
          <div className="buttoncontainer">
            <Engcard />
              <Espcard />
          </div>
      </div>
    
      
      


      
    </div>
    
  )
}
