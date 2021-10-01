import React from 'react'
import ClientTestimonials from '../Components/ClientTestimonials'
import FooterBig from '../Components/FooterBig'
import FooterSmall from '../Components/FooterSmall'
import Gallery from '../Components/Gallery'
import HeroSection from '../Components/HeroSection'
import MeetDogs from '../Components/MeetDogs'
import Navbar from '../Components/Navbar'
import OurTeam from '../Components/OurTeam'
import RecentNews from '../Components/RecentNews'
import RecentProject from '../Components/RecentProject'
import TrustedPartners from '../Components/TrustedPartners'
import UpcommingEvents from '../Components/UpcommingEvents'
import styles from '../styles/Index.module.css'
import Head from 'next/head'

function index() {
  return (
    <div  className={styles.container}>
      <Head>
        <title>Saltpeter | Home</title>
      </Head>
      <Navbar/>
      <HeroSection/>
      <MeetDogs/>
      <RecentProject/>
      <UpcommingEvents/>
      <RecentNews/>
      <OurTeam/>
      <Gallery/>
      <ClientTestimonials/>
      <TrustedPartners/>
      <FooterBig/>
      <FooterSmall/>
    </div>
  )
}

export default index
