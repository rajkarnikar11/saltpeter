import React from 'react'
import HeroSection from '../Components/HeroSection'
import MeetDogs from '../Components/MeetDogs'
import Navbar from '../Components/Navbar'
import styles from '../styles/Index.module.css'

function index() {
  return (
    <div  className={styles.container}>
      <Navbar/>
      <HeroSection/>
      <MeetDogs/>
    </div>
  )
}

export default index
