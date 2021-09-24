import React from 'react'
import styles from '../styles/teamcard.module.css'
import Image from 'next/dist/client/image';
function TeamCard(props) {
    return (
        <div className={styles.container}>
            <img width="372px" height="422px" src={props.image}  />
            <h1 className={styles.header}>{props.title}</h1>
            <p1 className={styles.desc}>{props.desc}</p1>
            <div className={styles.iconcontainer}>
                <Image  src="/assets/svgs/insta.svg" alt="insta" height="13px" width="13px" />
                <Image  src="/assets/svgs/in.svg" alt="linkedin" height="13px" width="13px" />
                <Image  src="/assets/svgs/twitter.svg" alt="twitter" height="13px" width="13px" />
            </div>
        </div>
    )
}

export default TeamCard
