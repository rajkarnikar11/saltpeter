import React from 'react'
import styles from '../styles/ourteam.module.css'
import Image from 'next/dist/client/image';
import CardBig from './CardBig';
import CardSmall from './CardSmall';
import TeamCard from './TeamCard';

export default function OurTeam() {
    return (
        <div className={styles.container}>
            <div className={styles.topSection} >
                <div className={styles.line} />
                    <div>
                        <h1 className={styles.header} >Our Team.</h1>
                        <p1 className={styles.desc}>We are not a team because we work together. We are a team because we respect, trust and care for each other.</p1>
                    </div>
            </div>
            <div className={styles.cardsection}>
                <TeamCard title="John Filmr Doe"
                image="/assets/team1.png"
                    desc="If you are going to use a passage of you sure there isn't middle of text."/>   
            
            
                <TeamCard title="Lora Martin"
                image="/assets/team2.png"
                    desc="If you are going to use a passage of you sure there isn't middle of text."/>   
            
           
                <TeamCard title="Lora Martin"
                image="/assets/team3.png"
                    desc="If you are going to use a passage of you sure there isn't middle of text."/>   
            
            </div>
            
        </div>
        
    )
}
