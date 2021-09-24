import React, {useState, useRef, useEffect } from 'react';
import Link from 'next/link';




import styles from '../styles/MeetDogs.module.css'
import Image from 'next/dist/client/image';

function MeetDogs() {

    
    return (
        <div  className={styles.container}>
            <div  className={styles.partation1}>
                <div  className={styles.left1} >
                    <div  style={{display:"flex"}} >
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
                    </div>
                </div>
                <div  className={styles.right1}>
                    <div  className={styles.dogright}>    
                        <Image src="/assets/dog1.png" alt="heroimage" height="434px" width="570px" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MeetDogs
