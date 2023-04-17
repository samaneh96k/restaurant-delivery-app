import OurMenuPage from '@/Components/OurMenu'
import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import React from 'react'

const OurMenu = () => {
  return (
      <div >
          <Navbar bgColor="white" textColor="black" />
          <OurMenuPage/>
          <Footer/>
    </div>
  )
}

export default OurMenu