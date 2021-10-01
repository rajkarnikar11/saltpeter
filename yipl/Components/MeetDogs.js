import React, {useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import ScrollAnimation from 'react-animate-on-scroll';
import styles from '../styles/MeetDogs.module.css'
import Image from 'next/dist/client/image';

function MeetDogs() {

    
    return (
        <div  className={styles.container}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            </Head>
            <div  className={styles.partation1}>
                <ScrollAnimation  duration={.7} animateOnce={true} delay={0}  animateIn="fadeInLeft"  className={styles.left1} >
                    <div  style={{display:"flex"}} >
                        <div className={styles.line} />
                        <div>
                            <h1 className={styles.header1} >Meet The Dogs</h1>
                            <p1 className={styles.desc}> Meet some of the dogs helped by The Grey Muzzle Organization. We provide grants and other funding to pay expenses, such as medical care, so the wonderful organizations that give these dogs a second chance can focus on their care.</p1>
                            <div style={{display:"flex"}}>
                                <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                                <p className={styles.readmore}>
                                    READ MORE
                                </p>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                <ScrollAnimation animateOnce={true} duration={.7} delay={0}  animateIn="fadeInRight"  className={styles.right1}>
                    <div  className={styles.dogright}>    
                        <Image  src="/assets/dog1.png" alt="heroimage" height="434px" width="570px" />
                    </div>
                    </ScrollAnimation>
            </div>
            
            </div>

    )
}

export default MeetDogs
