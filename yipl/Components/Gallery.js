import React, {useState, useRef, useEffect } from 'react';



import styles from '../styles/Gallery.module.css'
import Image from 'next/dist/client/image';

function Gallery() {
    
    return (
        <div  className={styles.container}>
            
            <div className={styles.partation2}>
                <div className={styles.left2}>
                    <div style={{display:"flex"}}>
                        <div className={styles.line} />
                        <div>
                            <h1 className={styles.header1} >Gallery.</h1>
                            <p1 className={styles.desc}> We have entered into a national partnership with YandC Store and you will find all of our incredible online content. </p1>
                        </div>
                    </div>
                    <div className={styles.recentcontainer}>
                        <Image src="/assets/gallery1.png" height="475px" width="566px"/>
                        <div className={styles.recentoverlay}>
                            <div className={styles.rdateoverlay}>
                                <div style={{display:"flex"}}>
                                    <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                    <p className={styles.date}>
                                        Feb 24, 2019
                                    </p>
                                </div>
                            </div>
                            <h1 className={styles.overlayheader}>    Enter Our #WhyWeLoveOldDogs Contest</h1>
                            <div className={styles.readcontainer}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.readmore}>
                                    VIEW GALLERY
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div>
                <div className={styles.recentcontainer}>
                        <Image src="/assets/gallery2.png" height="475px" width="566px"/>
                        <div className={styles.recentoverlay}>
                            <div className={styles.rdateoverlay}>
                                <div style={{display:"flex"}}>
                                    <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                    <p className={styles.date}>
                                        Feb 26, 2019
                                    </p>
                                </div>
                            </div>
                            <h1 className={styles.overlayheader}>Holiday gifts that celebrate old dogs!</h1>
                            <div className={styles.readcontainer}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.readmore}>
                                    VIEW GALLERY
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.viewmore}>
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

export default Gallery
