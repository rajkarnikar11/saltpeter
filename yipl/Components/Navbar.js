import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/dist/client/image';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image className={styles.dog}  src="/assets/svgs/dog.svg" height="15px" width="15px" alt="doggie" />
                <h1 className={styles.saltpeter}>Saltpeter</h1>
            </div>
            <ul>
                <li>HOME</li>
                <li>About Us+</li>
                <li>News and Events+</li>
                <li>Gallery</li>
                <li>Resources+</li>
                <li>Project</li>
                <li>Contacts</li>
                <li>Gallery</li>
                <li><Image className={styles.dog}  src="/assets/svgs/searchicon.svg" height="30px" width="28px" alt="doggie" /></li>
            </ul>
            
            
        </div>
    )
}

export default Navbar
