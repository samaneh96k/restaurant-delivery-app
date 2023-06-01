"use client";

import React from 'react'

const MottoSection = () => {
  return (
    
    <div className=" w-[96%] mx-auto  my-16 h-screen  relative bg-image  p-4 ">
      <div className='bg-primary-600/60 absolute w-full  top-0 left-0 bottom-0 backdrop-blur-md '> </div>
     
      <div className=' w-full flex flex-wrap mt-8  justify-between '>
     
       
        <div className='aspect-w-1 aspect-h-1 md:w-[40%] xl:w-[40%] w-full  flex z-10  relative '>
          <img  src="./img/chef-photo.jpg" className='w-full h-full md:h-4/5 xl:h-1/2 object-cover object-center  absolute  border-[16px] xl:border-[48px] border-solid border-white z-20 md:left-20 md:top-[-15%] xl:top-[-10%] top-[-30%]' alt="restaurant"/>
        </div> 
       
      <div className='md:w-[40%] xl:w-[50%] w-full h-full z-10 text-white items-center  pt-8'>
      <h3 className='xl:text-6xl text-3xl'>
          if more of us valued and cheer and song above hoarded gold,it world be a merrier world.
          </h3>
          <div className='mt-8'>
          <p className='xl:text-2xl '>BEN BURNALEY</p>
          <p className='xl:text-xs text-[8px]'>CHEF A FOWHDEO or Sicily </p>
         </div>
         
        </div>
   
      </div>
     

    </div>
  )
}

export default MottoSection;
// if more of us valued and cheer and song above hoarded gold.it world be a merrier world.