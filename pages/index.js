"use client";

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { dm } from './fonts.js'
import { cinzel } from './fonts.js'
import Link from "next/link";

export default function Home() {
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
          <Link href="/english">
              <button className={styles.homebutton}><h2 className={cinzel.className}>English</h2></button>
            </Link>
              <Link href="/espanol">
                <button className={styles.homebutton}><h2 className={cinzel.className}>Español</h2></button>
              </Link>
          </div>
      </div>
      </main>
      </div>
  )
}
