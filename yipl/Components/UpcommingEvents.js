import React from 'react'
import styles from '../styles/UpCommingEvent.module.css'
import Image from 'next/dist/client/image';
import CardBig from './CardBig';
import Cardbig1 from "../public/assets/cardbig1.png"
export default function UpcommingEvents() {
    return (
        <div className={styles.container}>
            <div className={styles.topSection} >
                <div className={styles.line} />
                    <div>
                        <h1 className={styles.header} >Upcoming Events.</h1>
                        <p1 className={styles.desc}> We have a host of wonderful events lined up for the year ahead that help raise funds and awareness for Street Dogs. We look forward to meeting you.</p1>
                                
                    </div>
            </div>
            <div className={styles.cardsection}>
                <CardBig title="Sketch Meetup Kathmandu V2 - &#8220;Unpresent&#8221;" date="Feb 23, 2019, 11:00 PM - 2:00PM" tag1="ngodistro" tag2="blog" image="/assets/cardbig1.png"/>
                <CardBig/>
                <CardBig/>
            </div>
        </div>
        
    )
}
