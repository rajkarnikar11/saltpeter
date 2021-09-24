import React from 'react'
import styles from '../styles/cardslider.module.css'
import Image from 'next/dist/client/image';
function CardSlider(props) {
    return (
        <div className={styles.container}>
            <div className={styles.headercontainer}>
                <div style={{display:"flex"}}>
                    <p className={styles.quote}>&#8221;</p>
                    <p className={styles.lorem}>Lorem ipsum dolor sit amet constur adipisicing elit sed </p>
                </div>
                <p className={styles.ipsum}>
                eiusmtempor incid sed dolore magna aliqu enim minim veniam quis nostrud exercittion ullamco labo ris nisi aliquip excepteur.
                </p>
            </div>
            <Image   src="/assets/svgs/vector.svg" alt="heroimage" height="27px" width="27px" />
            <div style={{display:"flex"}}>
                <img  src={props.image} height="70px" width="70px"/>
                <div className={styles.namecontainer}>
                    <h1 className={styles.name}>{props.name}</h1>
                    <p1 className={styles.job}>{props.job}</p1>
            </div>
            </div>
        </div>
    )
}

export default CardSlider
