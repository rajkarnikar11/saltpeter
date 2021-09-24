import React, {useState, useRef, useEffect } from 'react';



import styles from '../styles/RecentNews.module.css'
import Image from 'next/dist/client/image';

function RecentNews() {
    
    return (
        <div  className={styles.container}>
            
            <div className={styles.partation2}>
                <div className={styles.left2}>
                    <div style={{display:"flex"}}>
                        <div className={styles.line} />
                        <div>
                            <h1 className={styles.header1} >Recent News.</h1>
                            <p1 className={styles.desc}> More than 22,500 dogs live on the streets of Kathmandu, Nepal, and many suffer from starvation, infected open sores, mange, and other injuries and illnesses. </p1>
                        </div>
                    </div>
                    <div className={styles.recentcontainer}>
                        <Image src="/assets/recent1.png" height="504px" width="574px"/>
                        <div className={styles.recentoverlay}>
                            <div className={styles.rdateoverlay}>
                                <div style={{display:"flex"}}>
                                    <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                    <p className={styles.date}>
                                        Feb 24, 2019
                                    </p>
                                </div>
                            </div>
                            <h1 className={styles.overlayheader}>    Five stray dogs found dead in Serampore; some lying ill</h1>
                            <div className={styles.readcontainer}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.readmore}>
                                    READ MORE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.viewmore}>
                        <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                        <p className={styles.readmore}>
                            View More Projects
                        </p>
                    </div>
                </div>
                <div>
                <div className={styles.recentcontainer}>
                        <Image src="/assets/recent2.png" height="504px" width="574px"/>
                        <div className={styles.recentoverlay}>
                            <div className={styles.rdateoverlay}>
                                <div style={{display:"flex"}}>
                                    <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                    <p className={styles.date}>
                                        Feb 26, 2019
                                    </p>
                                </div>
                            </div>
                            <h1 className={styles.overlayheader}>    Thousands of street dogs in Mauritius visit paradise KTM’s first ever spay/neuter clinic as </h1>
                            <div className={styles.readcontainer}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.readmore}>
                                    READ MORE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.recentcontainer}>
                        <Image src="/assets/recent3.png" height="504px" width="574px"/>
                        <div className={styles.recentoverlay}>
                            <div className={styles.rdateoverlay}>
                                <div style={{display:"flex"}}>
                                    <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                    <p className={styles.date}>
                                        Feb 20, 2019
                                    </p>
                                </div>
                            </div>
                            <h1 className={styles.overlayheader}> 101 Dalmatian Street: Dogs, London landmarks and musical magic ...</h1>
                            <div className={styles.readcontainer}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.readmore}>
                                    READ MORE
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div> 
    )
}

export default RecentNews
