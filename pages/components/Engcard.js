import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


const Engcard = () => {
    return ( 
        <div className={styles.english}>
            <Image src="/acecup.webp" alt="acecup" width="100" height="200" />  
            <h2>English</h2>
    </div>
    );
}
 
export default Engcard;