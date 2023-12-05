import React from 'react'
import Image from "next/image"
import styles from '../../styles/Home.module.css'


const Espcard = () => {
    return ( 
        <div className={styles.spanish}>
            <Image src="/acepentacle.webp" alt="acepentacle" width="100" height="200" /> 
                    <h2>Español</h2>
    </div>
    );
}
 
export default Espcard;