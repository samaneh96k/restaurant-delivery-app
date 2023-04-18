import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import OurBlogs from '@/Components/ourBlogs'
import React from 'react'

const Blogs = () => {
  return (
      <div>
          <Navbar bgColor="white" textColor="black" />
          <OurBlogs/>
          <Footer/>
    </div>
  )
}

export default Blogs