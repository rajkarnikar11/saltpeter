import React, {useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation  } from "framer-motion"

 


import styles from '../styles/MeetDogs.module.css'
import Image from 'next/dist/client/image';

function RecentProject() {
    const animationControl = useAnimation();
    const {inView, entry, ref} = useInView();
    if (inView) {
        animationControl.start({
          opacity:1,
          x:0,
          transition: {
            delay: 0.1,
            duration:.5,
          }
        });
      }
    return (
        <div  className={styles.container}>
            
            <div className={styles.partation2}>
                <div className={styles.left2}>
                    <div style={{display:"flex"}}>
                        <div className={styles.line} />
                        <div>
                            <h1 className={styles.header} >Recent Project.</h1>
                            <p1 className={styles.desc}> Meet some of the dogs helped by The Saltpeater Organization. We provide grants and other funding to pay expenses, such as medical care, so the wonderful organizations </p1>
                            
                        </div>
                    </div>
                    <div className={styles.dogcontainer}>
                        <Image  src="/assets/dog2.png" alt="dogimage" layout="fill" />
                        <div className={styles.dogoverlay} >
                            <h1 className={styles.dogoverlaytextheader}>Forbes Features The Grey Muzzle Organization</h1>
                            <div className={styles.dogoverlaytime}>  
                                <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                <p style={{margin:"5px"}}>
                                    Aug 31, 2014
                                </p>
                            </div>
                            <div className={styles.dogoverlaytextpara}>
                            We are thrilled that Forbes has highlighted The Grey Muzzle Organization as one of its "12 Days of Charitable Giving" nonprofits to consider contributing to this holiday season!  
                            </div>
                            <div className={styles.dogoverlayreadmore}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.dogreadmore} >
                                    READ MORE
                                </p>
                            </div>
                        </div>
                        <div className={styles.plus}>
                            
                            <Image src="/assets/svgs/plus.svg" alt="+" layout="fill" />
                            
                        </div>
                    </div>
                    <div className={styles.dogcontainer}>
                        <Image  src="/assets/dog3.png" alt="dogimage" layout="fill" />
                        <div className={styles.dogoverlay} >
                            <h1 className={styles.dogoverlaytextheader}>Forbes Features The Grey Muzzle Organization</h1>
                            <div className={styles.dogoverlaytime}>  
                                <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                <p style={{margin:"5px"}}>
                                    Aug 31, 2014
                                </p>
                            </div>
                            <div className={styles.dogoverlaytextpara}>
                            We are thrilled that Forbes has highlighted The Grey Muzzle Organization as one of its "12 Days of Charitable Giving" nonprofits to consider contributing to this holiday season!  
                            </div>
                            <div className={styles.dogoverlayreadmore}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.dogreadmore} >
                                    READ MORE
                                </p>
                            </div>
                        </div>
                        <div className={styles.plus}>
                            
                            <Image src="/assets/svgs/plus.svg" alt="+" layout="fill" />
                            
                        </div>
                    </div>
                    
                </div>
                <div className={styles.right2}>
                    <div className={styles.dogcontainer}>
                        <Image  src="/assets/dog4.png" alt="dogimage" layout="fill" />
                        <div className={styles.dogoverlay} >
                            <h1 className={styles.dogoverlaytextheader}>Forbes Features The Grey Muzzle Organization</h1>
                            <div className={styles.dogoverlaytime}>  
                                <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                <p style={{margin:"5px"}}>
                                    Aug 31, 2014
                                </p>
                            </div>
                            <div className={styles.dogoverlaytextpara}>
                                We are thrilled that Forbes has highlighted The Grey Muzzle Organization as one of its "12 Days of Charitable Giving" nonprofits to consider contributing to this holiday season!  
                            </div>
                            <div className={styles.dogoverlayreadmore}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.dogreadmore} >
                                    READ MORE
                                </p>
                            </div>
                        </div>
                        <div className={styles.plus}>
                            
                            <Image src="/assets/svgs/plus.svg" alt="+" layout="fill" />
                            
                        </div>
                    </div>
                    <div className={styles.dogcontainer}>
                        <Image  src="/assets/dog5.png" alt="dogimage" layout="fill" />
                        <div className={styles.dogoverlay} >
                            <h1 className={styles.dogoverlaytextheader}>Forbes Features The Grey Muzzle Organization</h1>
                            <div className={styles.dogoverlaytime}>  
                                <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                                <p style={{margin:"5px"}}>
                                    Aug 31, 2014
                                </p>
                            </div>
                            <div className={styles.dogoverlaytextpara}>
                            We are thrilled that Forbes has highlighted The Grey Muzzle Organization as one of its "12 Days of Charitable Giving" nonprofits to consider contributing to this holiday season!  
                            </div>
                            <div className={styles.dogoverlayreadmore}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.dogreadmore} >
                                    READ MORE
                                </p>
                            </div>
                        </div>
                        <div className={styles.plus}>
                            
                            <Image src="/assets/svgs/plus.svg" alt="+" layout="fill" />
                            
                        </div>
                    </div>
                    <div className={styles.viewmore}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.readmore}>
                                    View More Projects
                                </p>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProject
