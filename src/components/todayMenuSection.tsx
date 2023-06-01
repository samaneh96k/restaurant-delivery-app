"use client";
import React from 'react'
import MyCustomBtn from '../common/myCustomBtn';



const TodayMenu = () => {
  return (
      <div className='p-8 flex flex-wrap relative justify-center '>
          
          <div className='xl:w-1/2 w-full relative'>
              <div className='aspect-w-4 aspect-h-2 h-full w-3/4'>
                  <img src='../img/TodayMenuChef.jpg' alt='TodayMenuChef' className='object-center   absolute   object-cover   border-solid  h-full w-full bottom-0'/>
              </div>
              <div className='aspect-w-1 aspect-h-1 absolute top-[-15%] left-[50%]  h-1/4 w-2/4 '>
                  <img src='../img/todayMenu1.jpg' alt='todayMenu1' className='h-1/2 w-full xl:border-[16px] border-8 border-white absolute z-10   object-center object-cover'/>
              </div>
            
          </div>

          <div className='xl:w-1/2 w-full p-8 '>
         
              <p className='text-primary-600'>TODAY'S  MENU</p>
              <h1 className='xl:text-2xl'>
                  Enjoy The Day's Dish , streight From The Chef.to You.
              </h1>
              <div className='my-8 divide-y divide-slate-200 font-bold '>
                  <div className='flex justify-between py-4 '>
                      <div >
                          <p className='xl:text-xl'>Friend Spring Rolls</p>
                          <p className='xl:text-[8px] text-gray-600'>Cemico or Vejtable</p>
                      </div>
                      <div>
                          <p>23.00$</p>
                      </div>
                  </div>
                  <div className='flex justify-between  py-4'>
                      <div >
                          <p className='xl:text-xl'>thai Summer Rolls</p>
                          <p className='xl:text-[8px] text-gray-600'>Cemico or Vejtable</p>
                      </div>
                      <div>
                          <p>14.50$</p>
                      </div>
                  </div>
                  <div className='flex justify-between  py-4'>
                      <div >
                          <p className='xl:text-xl'>Gai Of  Nuur Staty</p>
                          <p className='xl:text-[8px] text-gray-600'>Cemico or Vejtable</p>
                      </div>
                      <div>
                          <p>13.50$</p>
                      </div>
                  </div>
              </div>
            
              <MyCustomBtn color="white" text="Check The Menu" bg="bg-slate-900" size="14px" link="/ourMenu" />
        
             
          </div>
            
     
    </div>
  )
}

export default TodayMenu