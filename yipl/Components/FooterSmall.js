import React from 'react'
import Link from 'next/link'
import styles from '../styles/footersmall.module.css'
import Image from 'next/dist/client/image';
function FooterSmall() {
    return (
        <div className={styles.container}>
            <p1 className={styles.desc}>Designed by Y & C | All Rights Reserved ©YIPL 2019</p1>  
            <div className={styles.logosection}>
                <h1 className={styles.follow}>
                    Follow Us:
                </h1>
                <div className={styles.logocontainer}>
                    <div className={styles.logo}><Link href="https://twitter.com/" passHref={true} ><Image   src="/assets/svgs/twitterwhite.svg" height="50px" width="28px" alt="x" /></Link></div>
                    <div className={styles.logo}><Link href="https://linkedin.com/" passHref={true} ><Image   src="/assets/svgs/inwhite.svg" height="50px" width="28px" alt="x" /></Link></div>
                    <div className={styles.logo}><Link href="https://fb.com/" passHref={true} ><Image   src="/assets/svgs/fbwhite.svg" height="50px" width="28px" alt="x" /></Link></div>
                    <div className={styles.logo}><Link href="https://youtube.com/" passHref={true} ><Image   src="/assets/svgs/youwhite.svg" height="50px" width="28px" alt="x" /></Link></div>

                </div>
            </div>
        </div>
    )
}

export default 
FooterSmall
