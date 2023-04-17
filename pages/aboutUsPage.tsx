import AboutUs from '@/Components/AboutUs'
import ServiceAptions from '@/Components/ServiceAptions'
import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import React from 'react'

const AboutUsPage = () => {
  return (
      <div >
          <Navbar bgColor="white" textColor="black" />
          <AboutUs/>
          <ServiceAptions/>
      <Footer/>
    </div>
  )
}

export default AboutUsPage