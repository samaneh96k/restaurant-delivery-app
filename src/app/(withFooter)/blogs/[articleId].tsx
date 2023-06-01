"use client";
import React from 'react'

import Link from 'next/link'
import { RiTimerLine } from 'react-icons/ri'
import { BiComment } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { RxEyeOpen } from 'react-icons/rx'


import Discussion from './discussion'
import MyCustomBtn from '../../../common/myCustomBtn'

const SingleBlog = () => {
  return (
  
    <div className="h-full  w-full">
        <div className="w-full h-full divide-y">
        <div className="aspect-w-2 aspect-h-1 w-full h-full z-[-1] ">
          <img
            className=" object-center object-cover absolute top-[42%]  md:top-[18%] xl:top-[7%] left-[0] right-0   h-full w-full "
            src="../img/03.jpg"
            alt="restaurant-foods"
          />
        </div>
          <div className="xl:px-16 bg-white p-4 xl:p-8 h-fit w-2/3 mx-auto flex flex-wrap mt-[-5%] md:mt-[-10%]   ">
            
            <div className='flex h-fit w-full '>
            <div className=" bg-gradient-to-r from-[#ab795e] to-[#d3aa77] my-2 p-1 text-white xl:flex w-fit">
        <div className="flex items-center px-2  xl:px-6 bg-transparent border-white-400 border-2 border-solid">
          <Link href={"/"} className="cursor-pointer p-2 md:text-[12px] text-[8px]">ART A SEAGIN</Link>
        
        </div>
      </div>
              <div className='flex md:w-1/2 w-fit items-center justify-center '>
                <RiTimerLine className='md:text-2xl text-xs  w-1/3' />
                <div className=' w-2/3 text-xs'>Des 12.2022</div>
              </div>
            </div>
            <h2 className='w-full text-sm xl:text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h2>
            <span className='text-xl'>~~~</span>
            <div className='py-4 text-xs xl:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae libero odio corrupti quibusdam et ea velit, quos harum quidem, consequatur possimus, ab alias similique placeat laborum aliquid doloremque! Excepturi, quis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae libero odio corrupti quibusdam et ea velit, quos harum quidem, consequatur possimus, ab alias similique placeat laborum aliquid doloremque! Excepturi, quis.Vitae libero odio corrupti quibusdam et ea velit, quos harum quidem, consequatur possimus, ab alias similique placeat laborum aliquid doloremque! Excepturi, quis.
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae libero odio corrupti quibusdam et ea velit, quos harum quidem, consequatur possimus, ab alias similique placeat laborum aliquid doloremque! Excepturi, quis.</div>
            <div className=' flex w-full md:w-1/2 py-4 justify-between '>
              <div  className='flex  items-center'><RxEyeOpen className='xl:text-xl w-1/4 mx-2 ' /><span  className='text-xs'>2.4 k</span></div>
              <div className='flex  items-center'><AiOutlineHeart className='xl:text-xl  mx-2 w-1/4' /><span className='text-xs'>156</span></div>
              <div className='flex items-center '><BiComment className='xl:text-xl w-1/4 mx-2 ' /><span className='text-xs'>11</span></div>
            </div>
            <div className='flex flex-wrap items-center justify-between w-full border-t-2'>
              <div className='flex md:w-1/2 items-center justify-start py-2 md:p-8'>
                <div className='rounded-full border-1 rounded-red-200 md:py-8 md:px-8 py-4 px-4 bg-gray-400'></div>
                <div className='mx-2 md:text-sm text-[6px]'>
                  <h2 className='font-bold'>BRAYANA SMIT</h2>
                  <p>25 ARTICLES</p>
                </div>
              </div>
              <MyCustomBtn color="white" text="MORE ARTICLES" bg="bg-slate-900" size="14px" link="/"/>
            </div>
        </div>
        </div>
        <div className='bg-black w-full'>

         <Discussion/> 
        </div>
    </div>
   

  )
}

export default SingleBlog