import React from 'react'

import Link from 'next/link'
import { RiTimerLine } from 'react-icons/ri'

const SingleBlog = () => {
  return (
    <>
    <div className="  h-full  ">
        <div className="w-full h-full ">
        <div className="aspect-w-2 aspect-h-1  z-20">
          <img
            className=" object-center object-cover   h-full w-full "
            src="../img/03.jpg"
            alt="restaurant-foods"
          />
        </div>
          <div className="px-16 bg-white p-8 h-fit w-2/3 mx-auto flex flex-wrap absolute top-[80%] left-[18%]  z-50">
            
            <div className='flex h-fit w-full'>
            <div className=" bg-gradient-to-r from-[#ab795e] to-[#d3aa77] my-2 p-1 text-white xl:flex w-fit">
        <div className="flex items-center px-2  xl:px-6 bg-transparent border-white-400 border-2 border-solid">
          <Link href={"/"} className="cursor-pointer p-2 xl:text-md text-sm">ART A SEAGIN</Link>
        
        </div>
      </div>
              <div className='flex w-1/2 items-center justify-center'>  <RiTimerLine className='text-2xl w-1/3'/><div className=' w-2/3 '>Des 12.2022</div></div>
            </div>
            <h2 className='w-full text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h2>
            <span className='text-xl'>~~~</span>
            <div className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae libero odio corrupti quibusdam et ea velit, quos harum quidem, consequatur possimus, ab alias similique placeat laborum aliquid doloremque! Excepturi, quis.</div>
            <div className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae libero odio corrupti quibusdam et ea velit, quos harum quidem, consequatur possimus, ab alias similique placeat laborum aliquid doloremque! Excepturi, quis.</div>
            <div className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae libero odio corrupti quibusdam et ea velit, quos harum quidem, consequatur possimus, ab alias similique placeat laborum aliquid doloremque! Excepturi, quis.</div>
        </div>
      </div>
    </div>
   
  </>
  )
}

export default SingleBlog