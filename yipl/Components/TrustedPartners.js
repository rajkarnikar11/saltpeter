import React from 'react'
import styles from '../styles/trusted.module.css'
import Image from 'next/dist/client/image';
import ResourceCard from './ResourceCard';
function TrustedPartners() {
    return (
        <div className={styles.container}>
            <div className={styles.boxcontainer}>
                <div className={styles.box}>
                    <Image className={styles.boxlogo} src="/assets/svgs/watchnetwork.svg" alt="insta" height="44px" width="44px" />
                    <h1 className={styles.boxheader}>WATCH NETWORK</h1>
                </div>
                <div className={styles.box}>
                    <Image className={styles.boxlogo} src="/assets/svgs/beer.svg" alt="insta" height="44px" width="44px" />
                    <h1 className={styles.boxheader}>Beer Network</h1>
                </div>
                <div className={styles.box}>
                    <Image className={styles.boxlogo} src="/assets/svgs/cloud.svg" alt="insta" height="44px" width="44px" />
                    <h1 className={styles.boxheader}>cloud Network</h1>
                </div>
                <div className={styles.box}>
                    <Image className={styles.boxlogo} src="/assets/svgs/fingerprint.svg" alt="insta" height="44px" width="44px" />
                    <h1 className={styles.boxheader}>Y&C Product</h1>
                </div>
                
            </div>
            <div className={styles.topcontainer}>
                <div className={styles.line} />
                <div>
                    <h1 className={styles.header1} >Trusted Partners.</h1>
                </div>
            </div>
            <div className={styles.botcontainer}>            
                <div className={styles.left}>
                    <div style={{display:"flex"}} >   
                        <div className={styles.line2} />
                        <div>
                            <h1 className={styles.header1} >Resources.</h1>
                            <p1 className={styles.desc}>
                                Below are some resources for people who care about animals or have pets.
                            </p1>
                        </div>
                            
                        
                    </div>   
                <div className={styles.cardcontainer}>
                    <ResourceCard/>
                </div>                     
                </div>
                
            </div>
        </div>
    )
}

export default TrustedPartners
