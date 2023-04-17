import AboutUsPage from '@/Components/AboutUs'
import ServiceAptions from '@/Components/ServiceAptions'
import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import React from 'react'

const AboutUs = () => {
  return (
      <div >
          <Navbar bgColor="white" textColor="black" />
          <AboutUsPage/>
          <ServiceAptions/>
      <Footer/>
    </div>
  )
}

export default AboutUs;