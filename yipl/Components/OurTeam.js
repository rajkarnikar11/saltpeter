import React from 'react'
import styles from '../styles/ourteam.module.css'
import Image from 'next/dist/client/image';
import CardBig from './CardBig';
import CardSmall from './CardSmall';
import TeamCard from './TeamCard';
import Head from 'next/head'
import ScrollAnimation from 'react-animate-on-scroll';
export default function OurTeam() {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            </Head>
            <ScrollAnimation  duration={.7} animateOnce={true} delay={0}  animateIn="fadeInUp" className={styles.topSection} >
                <div className={styles.line} />
                    <div>
                        <h1 className={styles.header} >Our Team.</h1>
                        <p1 className={styles.desc}>We are not a team because we work together. We are a team because we respect, trust and care for each other.</p1>
                    </div>
            </ScrollAnimation>
            <div className={styles.cardsection}>
                <ScrollAnimation  duration={.7} animateOnce={true} delay={0}  animateIn="fadeInUp">
                    <TeamCard title="John Filmr Doe"
                    image="/assets/team1.png"
                        desc="If you are going to use a passage of you sure there isn't middle of text."/>   
                
                </ScrollAnimation>
                <ScrollAnimation  duration={.7} animateOnce={true} delay={300}  animateIn="fadeInUp">               
                    <TeamCard title="Lora Martin"
                    image="/assets/team2.png"
                        desc="If you are going to use a passage of you sure there isn't middle of text."/>   
            
                </ScrollAnimation>
                <ScrollAnimation  duration={.7} animateOnce={true} delay={600}  animateIn="fadeInUp">
                    <TeamCard title="Lora Martin"
                    image="/assets/team3.png"
                        desc="If you are going to use a passage of you sure there isn't middle of text."/>   
                </ScrollAnimation>
            </div>
            
        </div>
        
    )
}
