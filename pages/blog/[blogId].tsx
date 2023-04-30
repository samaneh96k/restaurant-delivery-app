
import SingleBlog from '@/Components/singleBlog'
import Navbar from '@/Components/navbar'
import { useRouter } from 'next/router'
import React from 'react'

const SinglePage = () => {
  const router = useRouter()
  const { blogId } = router.query
  return (
      <>
         <Navbar bgColor="white" textColor="black "/>
       <SingleBlog />  
     
    
    </>
  )
}

export default SinglePage