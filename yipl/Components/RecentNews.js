import React, {useState, useRef, useEffect } from 'react';
import {gsap,Power3} from "gsap";
import styles from '../styles/RecentNews.module.css'
import Image from 'next/dist/client/image';
import Head from 'next/head'
import ScrollAnimation from 'react-animate-on-scroll';
function RecentNews() {
    let overlay1= useRef(null);
    let overlay3= useRef(null);
    let overlay2= useRef(null);
    const expand1 =()=>{
        
        gsap.to(overlay1,.5, {css:{height:"100%",width:"100%",cursor:"pointer"}}  )
       
                     
    
    }
    const expand2 =()=>{
        
        gsap.to(overlay2,.5, {css:{height:"100%",width:"100%",cursor:"pointer"}}  )
       
                     
    
    }
    const shrink1 =()=>{
        
        gsap.to(overlay1,.5, {css:{width:"454px", height:"314px",cursor:"pointer"}}  )
       
                     
    
    }
   
    const shrink2 =()=>{
        
        gsap.to(overlay2,.5, {css:{width:"454px", height:"314px",cursor:"pointer"}}  )
       
                     
    
    }
    const shrink3 =()=>{
        
        gsap.to(overlay3,.5, {css:{width:"454px", height:"314px",cursor:"pointer"}}  )
       
                     
    
    }
    const expand3 =()=>{
        
        gsap.to(overlay3,.5, {css:{height:"100%",width:"100%",cursor:"pointer"}}  )
       
                     
    
    }
    return (
        <div   className={styles.container}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            </Head>
            <div className={styles.partation2}>
                <div className={styles.left2}>
                    <ScrollAnimation  duration={.7} animateOnce={true} delay={0}  animateIn="fadeInLeft" style={{display:"flex"}}>
                        <div className={styles.line} />
                        <div>
                            <h1 className={styles.header1} >Recent News.</h1>
                            <p1 className={styles.desc}> More than 22,500 dogs live on the streets of Kathmandu, Nepal, and many suffer from starvation, infected open sores, mange, and other injuries and illnesses. </p1>
                        </div>
                    </ScrollAnimation>
                    <div className={styles.recentcontainer}>
                        <div onMouseEnter={expand1} onMouseLeave={shrink1}>
                            <ScrollAnimation  duration={.7} animateOnce={true} delay={0}  animateIn="fadeInLeft">
                                <Image src="/assets/recent1.png" height="504px" alt="dogs" width="574px"/>
                                <div  ref={el=>overlay1=el} className={styles.recentoverlay}>
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
                            </ScrollAnimation>
                        </div>
                    </div>
                    <ScrollAnimation  duration={.7} animateOnce={true} delay={0}  animateIn="fadeInLeft" className={styles.viewmore}>
                        <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                        <p className={styles.readmore}>
                            View More Projects
                        </p>
                    </ScrollAnimation>
                </div>
                <div>
                    <div onMouseEnter={expand2} onMouseLeave={shrink2} className={styles.recentcontainer}>
                        <ScrollAnimation  duration={.7} animateOnce={true} delay={0}  animateIn="fadeInRight">
                            <Image src="/assets/recent2.png" alt="dog" height="504px" width="574px"/>
                            <div ref={el=>overlay2=el} className={styles.recentoverlay}>
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
                        </ScrollAnimation>    
                    </div>
                    <div onMouseEnter={expand3} onMouseLeave={shrink3} className={styles.recentcontainer}>
                        <ScrollAnimation  duration={.7} animateOnce={true} delay={0}  animateIn="fadeInRight">   
                            <Image src="/assets/recent3.png" alt="dog" height="504px" width="574px"/>
                            <div ref={el=>overlay3=el} className={styles.recentoverlay}>
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
                        </ScrollAnimation>
                    </div>   
                </div>
            </div>
        </div> 
    )
}

export default RecentNews
