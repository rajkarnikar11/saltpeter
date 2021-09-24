import React from 'react'
import styles from '../styles/clienttestimonials.module.css'
import Image from 'next/dist/client/image';
import CardBig from './CardBig';
import CardSmall from './CardSmall';
import TeamCard from './TeamCard';
import CardSlider from './CardSlider';
import { Swiper, SwiperSlide } from 'swiper/react';


import SwiperCore, { Navigation,Parallax,EffectFade ,Autoplay,Mousewheel, Pagination, Scrollbar, A11y } from 'swiper/core';
SwiperCore.use([Navigation ,Parallax,Autoplay, EffectFade,Mousewheel, Pagination, Scrollbar, A11y]);

function ClientTestimonials() {
    return (
        <div className={styles.container}>
            <div className={styles.topSection} >
                <div className={styles.line} />
                    <div>
                        <h1 className={styles.header} >Client Testimonials.</h1>
                        <p1 className={styles.desc}>People are saying great things about us. ️</p1>
                    </div>
            </div>
            <div className={styles.slidersectionbig}>
                <Swiper 
                    spaceBetween={0}
                    effect="coverflow"
                    slidesPerView={2}
                    autoplay={{
                        "delay": 5000,
                        "disableOnInteraction": false
                    }}
                    loop={true}
                    // pagination={{
                        
                    //     clickable:true,
                    //     bulletClass: `swiper-pagination-bullet `
                    // }}
                    className="swiper-pagination-black"
                            
                    >
                        <SwiperSlide className={styles.slider}>
                            <CardSlider name="Lora martin" job="Web Developer/" image="/assets/slidecard1.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider}>
                            <CardSlider name="sara martin" job="admin" image="/assets/slidecard2.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider}>
                            <CardSlider name="Lora martin" job="Web Developer/" image="/assets/slidecard1.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider}>
                            <CardSlider name="sara martin" job="admin" image="/assets/slidecard2.png"/>
                        </SwiperSlide>
               
                </Swiper>
            </div>
            <div className={styles.slidersectionsmall}>
                <Swiper 
                    spaceBetween={0}
                    effect="coverflow"
                    slidesPerView={1}
                    autoplay={{
                        "delay": 5000,
                        "disableOnInteraction": false
                    }}
                    loop={true}
                    // pagination={{
                        
                    //     clickable:true,
                    //     bulletClass: `swiper-pagination-bullet `
                    // }}
                    className="swiper-pagination-black"
                            
                    >
                        <SwiperSlide className={styles.slider}>
                            <CardSlider name="Lora Martin" job="Web Developer/" image="/assets/slidecard1.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider}>
                            <CardSlider name="Sara Martin" job="admin" image="/assets/slidecard2.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider}>
                            <CardSlider name="Lora Martin" job="Web Developer/" image="/assets/slidecard1.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider}>
                            <CardSlider name="Sara Martin" job="admin" image="/assets/slidecard2.png"/>
                        </SwiperSlide>
                
                </Swiper>
            </div>
            
            
        </div>
    )
}

export default ClientTestimonials
