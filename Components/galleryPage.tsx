import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const GalleryPage = () => {
  
    const images = [ "../img/02.jpg", "../img/03.jpg", "../img/04.jpg", "../img/05.jpg", "../img/06.jpg"]

        
   
  return (
      <div className='h-screen overflow-hidden'>
               <Carousel>
          {
          
              images.map((img)=> (
                  <div className='h-screen '>
                      <div className='aspect-w-1 aspect-h-1 w-full relative   object-cover h-fit'>
                      <img src={img} alt="restaurant" className='object-cover object-center h-fit w-full absolute top-0 left-0' />
                      </div>
                     
                  </div>
              ))
          }
          </Carousel>
    </div>
  )
}

export default GalleryPage