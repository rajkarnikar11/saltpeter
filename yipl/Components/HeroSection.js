import React from 'react'
import Image from 'next/dist/client/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from '../public/assets/slider/sliderimage1.png'
import styles from '../styles/HeroSection.module.css';
import SwiperCore, { Navigation,Parallax,EffectFade ,Autoplay,Mousewheel, Pagination, Scrollbar, A11y } from 'swiper/core';
SwiperCore.use([Navigation ,Parallax,Autoplay, EffectFade,Mousewheel, Pagination, Scrollbar, A11y]);


function HeroSection() {
    return (
        <div className={styles.container}>
            <Swiper style={{height: "100%",width:"100%"}}
                spaceBetween={0}
                effect="coverflow"
                slidesPerView={1}
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": false
                }}
                loop={true}
                pagination={{
                    
                    clickable:true,
                    bulletClass: `swiper-pagination-bullet `
                  }}
                  className="swiper-pagination-black"
                        
                >
                    <SwiperSlide className={styles.slider}>
                        <div>
                            <Image className={styles.image} src="/assets/slider/sliderimage1.png" alt="heroimage" layout="fill" /> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slider}>
                         <Image  src={Slider1} alt="heroimage" layout="fill" /> 
                    </SwiperSlide>
                    <SwiperSlide className={styles.slider}>
                        <Image  src="/assets/slider/sliderimage1.png" alt="heroimage"layout="fill" /> 
                    </SwiperSlide>
            </Swiper>
            <div className={styles.msgContainer}>
                <h1 className={styles.header}>
                    <div>
                        Featured Posts
                    </div>
                    <div>
                        <Image className={styles.braket}  src="/assets/svgs/leftangle.svg" alt="heroimage" height="19.68px" width="11.25px" />
                        <Image className={styles.angle} src="/assets/svgs/rightangle.svg" alt="heroimage" height="19.68px" width="11.25px" />
                        <Image className={styles.angle} src="/assets/svgs/leftangle.svg" alt="heroimage" height="19.68px" width="11.25px" />
                        <Image className={styles.braket} src="/assets/svgs/rightangle.svg" alt="heroimage" height="19.68px" width="11.25px" />

                    </div>
                </h1>
                <div className={styles.line} />
                <h1 className={styles.subheader}>
                Researchers explore impact of obesity on dog’s health
                </h1>
                <div style={{display:"flex"}}>
                    <Image  src="/assets/svgs/clock.svg" alt="cl0ck" height="12.19px" width="12.19px" />
                    <p className={styles.date}>
                        Aug 31, 2014
                    </p>
                    </div>
                <p className={styles.info}>
                    If you thought that obesity affects only humans, you may be wrong. It can also shorten the lives of your canine friends, finds research. The research, from the University of Liverpool in the UK, reveals 
                </p>
                <div style={{display:"flex"}}>
                    <Image  src="/assets/svgs/chevron.svg" alt="heroimage" height="16px" width="16px" />
                    <p className={styles.readmore}>
                        READ MORE
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
