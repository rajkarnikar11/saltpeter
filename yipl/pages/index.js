import React from 'react'
import ClientTestimonials from '../Components/ClientTestimonials'
import Gallery from '../Components/Gallery'
import HeroSection from '../Components/HeroSection'
import MeetDogs from '../Components/MeetDogs'
import Navbar from '../Components/Navbar'
import OurTeam from '../Components/OurTeam'
import RecentNews from '../Components/RecentNews'
import RecentProject from '../Components/RecentProject'
import UpcommingEvents from '../Components/UpcommingEvents'
import styles from '../styles/Index.module.css'

function index() {
  return (
    <div  className={styles.container}>
      <Navbar/>
      <HeroSection/>
      <MeetDogs/>
      <RecentProject/>
      <UpcommingEvents/>
      <RecentNews/>
      <OurTeam/>
      <Gallery/>
      <ClientTestimonials/>
    </div>
  )
}

export default index
