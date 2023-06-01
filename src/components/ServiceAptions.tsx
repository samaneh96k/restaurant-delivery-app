"use client";
import React from 'react'
import { RiTimerLine } from 'react-icons/ri';
import { TiLeaf } from 'react-icons/ti';
import { BsPatchCheckFill } from 'react-icons/bs';

const ServiceAptions = () => {
    
  return (
      <div className='flex bg-gray-100 text-center flex-wrap p-8'>
          <div className='flex justify-center flex-wrap p-4  xl:w-1/3 w-full'>
              <BsPatchCheckFill className='text-4xl  w-full text-primary-600' my-4/>
              <h3 className='font-bold text-xl w-full  my-4'>High Quality</h3>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi corporis hic possimus soluta pariatur, nulla perferendis vel temporibus quisquam itaque saepe deleniti porro quo! Autem, tempore quam. Incidunt, doloribus.</p>
          </div>
          <div className='flex justify-center flex-wrap p-4 xl:w-1/3 w-full'>
              <TiLeaf className='text-4xl  w-full text-primary-600'/>
              <h3 className='font-bold text-xl w-full my-4'>Royal  Taste</h3>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat voluptate placeat eaque, ad deserunt, deleniti sint maiores voluptatibus error, minus aliquam debitis doloremque vel culpa maxime numquam? Unde, quia!</p>
          </div>
          <div className='flex justify-center flex-wrap p-4 xl:w-1/3 w-full'>
              <RiTimerLine className='text-4xl  w-full text-primary-600'/>
              <h3 className='font-bold text-xl w-full  my-4'>Quick Services</h3>
              <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit amet, accusantium quos nihil veritatis molestiae. Ex numquam doloremque harum libero, porro minima commodi est facere vel? Quibusdam, impedit. Iure, saepe. </p>
          </div>
    </div>
  )
}

export default ServiceAptions