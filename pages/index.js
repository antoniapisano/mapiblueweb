'use client'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { dm } from './fonts.js'
import { cinzel } from './fonts.js'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Mapi Tarot Readings</title>
      </Head>
<main className={cinzel.className}>
     <div className={styles.gridcontainer}>
          <h2 className={styles.thistitle}>Mapi Tarot Reading</h2>
            <div className={dm.className}>
              <h1 className={styles.thistitlebig}>Here to guide you</h1>
            </div>
          <div className={styles.homebuttoncontainer}>
              <button className={styles.homebutton} type="button" onClick={() => router.push('/english')}>
                <h2 className={cinzel.className}>English</h2></button>
              <button className={styles.homebutton} type="button" onClick={() => router.push('/espanol')}>
                <h2 className={cinzel.className}>Español</h2></button>
              
          </div>
      </div>
      </main>
    
      
      


      
    </div>
  
    
  )
}

