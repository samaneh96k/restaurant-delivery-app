import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

const MyCustomBtn = ({color,text,bg,size}:any ) => {
  return (
    <div className={`${bg} my-2 p-1 text-${color} xl:flex w-fit`}>
    <div className={`flex items-center py-2 px-4 ${bg} border-${color} border-2 border-solid`}>
              <a className={`cursor-pointer p-1 xl:text-[${size}] text-sm text-${color} font-bold` }>{text}</a>
      <ArrowLongRightIcon className="md:h-6 md:w-4 h-4 w-4" />
    </div>
  </div>
  )
}

export default MyCustomBtn;