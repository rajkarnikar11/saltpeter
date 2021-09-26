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
                        <ul className={styles.navcontainer2}>
                            <li className={styles.navlinks}>All</li>
                            <li className={styles.navlinks}> Training</li>
                            <li className={styles.navlinks}>Health & Wellness</li>
                            <li className={styles.navlinks}>Home Remedies</li>
                            <li className={styles.navlinks}>Street Story</li>
                        </ul>
                        <ResourceCard image="/assets/book1.png" desc="New Humanitarianism and the Crisis of Charity: Good Intentions on the Road to " date="Nov 30, 2018" header="New Humanitarianism and the Crisis of Charity"/>
                        <ResourceCard image="/assets/book2.png" desc="Power and Charity: Early History of the Tung Wah Hospital, Hong Kong (East " date="Nov 30, 2018" header="Power and Charity"/>

                    </div>                     
                </div>
                <div className={styles.right}>
                    <ul className={styles.navcontainer1}>
                        <li className={styles.navlinks}>All</li>
                        <li className={styles.navlinks}> Training</li>
                        <li className={styles.navlinks}>Health & Wellness</li>
                        <li className={styles.navlinks}>Home Remedies</li>
                        <li className={styles.navlinks}>Street Story</li>
                    </ul>
                    <ResourceCard image="/assets/book3.png" desc="This review analyses the approaches used by the 10 Swiss NGOs currently" date="20 Feb,2019" header="Accountability to Affected People"/>
                    <ResourceCard image="/assets/book4.png" desc="After a devastating plague, two communities emerge as bastions of  " date="Nov 30, 2018" header="Accountability to Affected People"/>
                    <div className={styles.viewmor}>
                        <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                        <p className={styles.readmoreprojects}>
                            VIEW MORE GALLERIES
                        </p>
                    </div>    
                </div>
                
            </div>
        </div>
    )
}

export default TrustedPartners
