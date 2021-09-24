import React from 'react'
import styles from '../styles/UpCommingEvent.module.css'
import Image from 'next/dist/client/image';
import CardBig from './CardBig';
import CardSmall from './CardSmall';

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
                <CardBig  className={styles.card} title="Sketch Meetup Kathmandu V2 - &#8220;Unpresent&#8221;" date="Feb 23, 2019, 11:00 PM - 2:00PM" tag1="ngodistro" tag2="blog" image="/assets/cardbig1.png"/>
                <CardBig  className={styles.card} title="Simple truth about 200-day moving average" date="Feb 25, 2019, 11:00 PM" tag1="streets" tag2="dogs" image="/assets/cardbig2.png"/>
                <CardBig  className={styles.card} title="Street dogs vaccinated against diseases/rabies" date="Feb 28, 2019, 11:00 PM" tag1="ngodistro" tag2="streetdog" image="/assets/cardbig3.png"/>

            </div>
            <h1 className={styles.header}>Past Events</h1>
            <div className={styles.cardsectionsmall}>
                <CardSmall title="The Street Giveth and the Street Taketh Away" image="/assets/caardsmall1.png"/>
                <CardSmall title="TThe 59th Street Bridge Song" image="/assets/cardsmall2.png"/>
                <CardSmall title="The Street Giveth and the Street Taketh Away" image="/assets/cardsmall3.png"/>
                <CardSmall title="Incident on 57th Street" image="/assets/cardsmall4.png"/>
            </div>
            <div className={styles.viewmore}>
                        <Image  src="/assets/svgs/chevron2.svg" alt="heroimage" height="16px" width="16px" />
                        <p className={styles.readmore}>
                            View More Projects
                        </p>
                    </div>
        </div>
        
    )
}
