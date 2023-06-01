
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import React from 'react'

const MyCustomBtn = ({color,text,bg,size,link}:any ) => {
  return (
    <div className={`${bg} my-2 p-1 text-${color} flex w-fit cursor-pointer`}>
    <div className={`flex items-center py-2 px-4 ${bg} border-${color} border-2 border-solid`}>
              <Link href={link} className={`cursor-pointer p-1 md:text-[${size}] text-[10px] text-${color} font-bold` }>{text}</Link>
      <ArrowLongRightIcon className="md:h-6 md:w-6 h-4 w-4" />
    </div>
  </div>
  )
}

export default MyCustomBtn;