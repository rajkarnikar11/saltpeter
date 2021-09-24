import React from 'react'
import styles from '../styles/cardBig.module.css'
import Image from 'next/dist/client/image';

function CardBig(props) {
    return (
        <div className={styles.container}>
           <img width="372px" height="216px" src={props.image}/>
           <p1 className={styles.carddate}> {props.date}</p1>
           <h1 className={styles.title}>{props.title}</h1>
           <div className={styles.line}/>
           <div className={styles.tagContainer}>
                <p1 className={styles.tag}>{props.tag1}</p1>
                <p1 className={styles.tag}>{props.tag2}</p1>
           </div>
        </div>
        
        
    )
}

export default CardBig
