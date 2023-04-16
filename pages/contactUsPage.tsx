import ContactUs from '@/Components/ContactUs';
import Footer from '@/Components/footer';
import Navbar from '@/Components/navbar';
import React from 'react'

const ContactUsPage = () => {
  return (
    <>
      <Navbar bgColor="white" textColor="black" />
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default ContactUsPage;