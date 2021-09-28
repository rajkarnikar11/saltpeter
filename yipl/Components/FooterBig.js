import React, {useState, useRef, useEffect } from 'react';
import styles from '../styles/footerbig.module.css'
import Image from 'next/dist/client/image';
import {gsap,Power3} from "gsap";
function FooterBig() {
    let top= useRef(null);
    var tl2 = gsap.timeline({ repeat: -1 });
    const move  =()=>{
        tl2.fromTo(top,.7,{y:0},{y:-25})
            tl2.play();
    }     
    const out  =()=>{
        tl2.pause();
    }

    
    const scrollToTop =()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    return (
        <div className={styles.container}> 
            <div onMouseEnter={move} onMouseLeave={out}  onClick={scrollToTop} className={styles.topcontainer}>
                <h1  ref={el=>top=el} className={styles.arrow}>↑</h1>
                <p1 className={styles.top}>TOP</p1>
            </div>
            <div>
                <div className={styles.header}>
                    <Image className={styles.dog}  src="/assets/svgs/dog.svg" height="30px" width="28px" alt="doggie" />
                    <h1 className={styles.saltpeter}>Saltpeter</h1>
                </div>
                <div className={styles.contact}>
                    <h1 className={styles.info1}>Address:</h1>
                    <p1 className={styles.info2}>Double Standard, Lalitpur,Nepal.</p1>
                </div>
                <div className={styles.contact}>
                    <h1 className={styles.info1}>Phone:</h1>
                    <p1 className={styles.info2}>+1 264 567 8900</p1>
                </div>
                <div className={styles.contact}>
                    <h1 className={styles.info1}>Email:</h1>
                    <p1 className={styles.info2}>info@ngodistro.com</p1>
                </div>
            </div>
            <div >
                <h1 className={styles.main}>About</h1>
                <p1 className={styles.secondary}>Saltpeater</p1>
                <p1 className={styles.secondary}>Our Team</p1>
                <p1 className={styles.secondary}>Contact</p1>
                <p1 className={styles.secondary}>Careers</p1>
                <p1 className={styles.secondary}>sitemap</p1>
                

            </div>
            <div >
                <h1 className={styles.main}>Resources</h1>
                <p1 className={styles.secondary}>Research & Reports</p1>
                <p1 className={styles.secondary}>Projects</p1>
                <p1 className={styles.secondary}>News and Events</p1>
                
                

            </div>
            <div className={styles.let} >
                <h1 className={styles.main}>Newletter</h1>
                <div className={styles.emailcontainer}>
                    <input className={styles.email} placeholder="Email"/>
                    <Image className={styles.pulse}  src="/assets/svgs/arrow.svg" height="36px" width="36px" alt="search" />
                   
                </div>

                
                
                

            </div>
        </div>
    )
}

export default FooterBig
