import ContactUsPage from '@/Components/ContactUs';
import Footer from '@/Components/footer';
import Navbar from '@/Components/navbar';
import React from 'react'

const ContactUs= () => {
  return (
    <>
      <Navbar bgColor="white" textColor="black" />
      <ContactUsPage/>
      <Footer/>
    </>
  )
}

export default ContactUs;