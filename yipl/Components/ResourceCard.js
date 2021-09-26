import React from 'react'
import styles from '../styles/ResourceCard.module.css'
import Image from 'next/dist/client/image';
function ResourceCard(props) {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.image} src={props.image} width="146px" height="190px" />
            </div>
            <div className={styles.info}>
                <h1 className={styles.header}>{props.header}</h1>  
                <p1 className={styles.date}>{props.date}</p1><br/>
                <p1 className={styles.desc}>{props.desc}</p1>  
                <div className={styles.downloadcontainer}>   
                    <p1 className={styles.download}>Download</p1>
                    <Image   src="/assets/svgs/download.svg" height="14.77px" width="16px" alt="search" />
                </div> 
            </div>  
        </div>
    )
}

export default ResourceCard
