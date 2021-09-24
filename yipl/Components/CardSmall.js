import React from 'react'
import styles from '../styles/cardsmall.module.css'
function CardSmall(props) {
    return (
        <div className={styles.container}>
            <img src={props.image}  />
            <h1 className={styles.header}>{props.title}</h1>
        </div>
    )
}

export default CardSmall
