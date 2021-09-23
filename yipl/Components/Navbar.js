import React, {useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {gsap,Power3} from "gsap";
import styles from '../styles/Navbar.module.css'
import Image from 'next/dist/client/image';
const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    let head=useRef(null);
    
    let side= useRef(null);
    let side1= useRef(null);
    let side2= useRef(null);
    let side3= useRef(null);
    let side4= useRef(null);
    let side5= useRef(null);
    let side6= useRef(null);
    let side7= useRef(null);
    let side8= useRef(null);
    var tl = gsap.timeline();
    var tl2 = gsap.timeline();
    function up(){
        gsap.to(head,.3,{y:-20})
    }
    function down(){
        tl2.to(head,.1,{y:0})
                .to(head,.15,{y:-10})
                .to(head,.1,{y:0})
                .to(head,.1,{y:-3})
                .to(head,.05,{y:0})
                .to(head,.05,{y:-1})
                .to(head,.02,{y:0})
    }
    const expand =()=>{
        
        gsap.timeline().fromTo(side1,.2, {y:-500,css:{visibility:"visible"}} ,{y:700 } )
        gsap.timeline().fromTo(side2,.2, {y:-700,css:{visibility:"visible"}, delay:.1},{y:700,delay:.1} )
        gsap.timeline() .fromTo(side3,.2, {y:-700,css:{visibility:"visible"}, delay:.2},{y:700,delay:.2} )
        gsap.timeline() .fromTo(side4,.2, {y:-700,css:{visibility:"visible"},delay:.3},{y:700,delay:.3} )
        gsap.timeline() .fromTo(side5,.2, {y:-700,css:{visibility:"visible"},delay:.4},{y:700,delay:.4} )
        gsap.timeline() .fromTo(side6,.2, {y:-700,css:{visibility:"visible"},delay:.5},{y:700,delay:.5} )
        gsap.timeline() .fromTo(side7,.2, {y:-700,css:{visibility:"visible"},delay:.6},{y:700,delay:.6} )
        gsap.timeline() .fromTo(side8,.2, {y:-700,css:{visibility:"visible"},delay:.7},{y:700,delay:.7} )

        
        setDropDown(true);              
    
    }
    const shrink =()=>{
        gsap.to(side5,.2, {y:-700,delay:.3, ease:Power3.easeInOut} )
        gsap.to(side4,.2, {y:-700,delay:.4, ease:Power3.easeInOut} )
        gsap.to(side3,.2, {y:-700,delay:.5, ease:Power3.easeInOut} )
        gsap.to(side2,.2, {y:-700,delay:.6, ease:Power3.easeInOut} )
        gsap.to(side1,.2, {y:-700,delay:.7, ease:Power3.easeInOut} )
        gsap.to(side6,.2, {y:-700,delay:.2, ease:Power3.easeInOut} )
        gsap.to(side7,.2, {y:-700,delay:.1, ease:Power3.easeInOut} )
        gsap.to(side8,.2, {y:-700, ease:Power3.easeInOut} ) 

        setDropDown(false);
    
    }
    useEffect(()=>{
        gsap.timeline().to(side,0, {y:-700,}  );
        tl.fromTo(head,.2, {y:-700,rotation:0},{y:20,rotation:0})
        .to(head,.2, {y:-10,rotation:0})
        .to(head,.1, {rotation:-10 ,y:0})
        .to(head,.2, {rotation:0})
        .to(head,.15, {rotation:-8})
        .to(head,.2, {rotation:0})
        .to(head,.2, {rotation:-6})        
        .to(head,.2, {rotation:0})
        .to(head,.2, {rotation:-4})
        .to(head,.3, {rotation:0})
        .to(head,.35, {rotation:-2})
        .to(head,.4, {rotation:0})
    
        
        },[])
    return (
        <div className={styles.container}>
            <div ref={el=>head=el} onMouseEnter={up} onMouseLeave={down}  className={styles.header}>
                <Image className={styles.dog}  src="/assets/svgs/dog.svg" height="30px" width="28px" alt="doggie" />
                <h1 className={styles.saltpeter}>Saltpeter</h1>
            </div>
            <div onClick={dropDown ==false ? expand : shrink} className={styles.burger}>
                <Image   src="/assets/svgs/burgermenu.svg" height="50px" width="28px" alt="x" />
            </div>
            <ul ref={el=>side=el} className={styles.sidelinkContainer}>
                <li ref={el=>side1=el} className={styles.sidelink}><Link href="/">Home</Link> </li>
                <li ref={el=>side2=el} className={styles.sidelink}><Link href="#skills">Skills</Link></li>
                <li ref={el=>side3=el} className={styles.sidelink}><Link href="#tools">Tools</Link></li>
                <li ref={el=>side4=el} className={styles.sidelink}><Link href="">Contact</Link></li>
                <li ref={el=>side5=el} className={styles.sidelink}><Link href="">Work</Link></li>
                <li ref={el=>side6=el} className={styles.sidelink}><Link href="">Work</Link></li>
                <li ref={el=>side7=el} className={styles.sidelink}><Link href="">Work</Link></li>
                <li ref={el=>side8=el} className={styles.sidelink}><Link href="">Work</Link></li>
            </ul>
            <ul className={styles.navLinks}>
                <li className={styles.home}>HOME</li>
                <li className={styles.navItems}>About Us+</li>
                <li className={styles.navItems}>News and Events+</li>
                <li className={styles.navItems}>Gallery</li>
                <li className={styles.navItems}>Resources+</li>
                <li className={styles.navItems}>Project</li>
                <li className={styles.navItems}>Contacts</li>
                <li className={styles.navItems}>Gallery</li>
                <li className={styles.searchIcon}><Image   src="/assets/svgs/searchicon.svg" height="15px" width="15px" alt="search" /></li>
            </ul>
            
            
        </div>
    )
}

export default Navbar
