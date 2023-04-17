import BookTablePage from '@/Components/bookTablePage'
import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import React from 'react'

const BookTable = () => {
  return (
      <>
          <Navbar bgColor="white" textColor="black" />
          <BookTablePage />
          <Footer/>
    </>
  )
}

export default BookTable