import React, {useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation  } from "framer-motion"



import styles from '../styles/MeetDogs.module.css'
import Image from 'next/dist/client/image';

function MeetDogs() {
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
            <div ref={ref} className={styles.partation1}>
                <div  className={styles.left1} >
                    <motion.div style={{display:"flex"}} initial={{opacity:0,x:-30}} animate={animationControl}>
                        <div className={styles.line} />
                        <div>
                            <h1 className={styles.header} >Meet The Dogs</h1>
                            <p1 className={styles.desc}> Meet some of the dogs helped by The Grey Muzzle Organization. We provide grants and other funding to pay expenses, such as medical care, so the wonderful organizations that give these dogs a second chance can focus on their care.</p1>
                            <div style={{display:"flex"}}>
                            <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                            <p className={styles.readmore}>
                            READ MORE
                        </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div initial={{opacity:0,x:30}} animate={animationControl} className={styles.right1}>
                    <Image  src="/assets/dog1.png" alt="heroimage" height="343px" width="570px" />
                </motion.div>
            </div>
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
                        <Image  src="/assets/dog2.png" alt="heroimage" layout="fill" />
                        <div className={styles.dogoverlay} >
                            Read More
                            </div>
                        <div className={styles.plus}>
                            
                            <Image src="/assets/svgs/plus.svg" alt="+" layout="fill" />
                        </div>
                    </div>
                </div>
                <div className={styles.right2}>

                </div>
            </div>
        </div>
    )
}

export default MeetDogs
