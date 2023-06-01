"use client";

import React, { useEffect, useState } from "react";
import { ArrowLongRightIcon ,Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import { BsSuitDiamondFill } from 'react-icons/bs';
import Link from "next/link";





const Navbar = ({bgColor,textColor}:any) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isColorWhite, setColorWhite] = useState<string>()




useEffect(() => {
  if (bgColor === "white") {
    setColorWhite("../chef-restaurant-logo-publicdomainvectors.svg")
  }else
    if (bgColor === "transparent") {
      setColorWhite("../chef-whiteLogo.svg")
    
    } 
   

}, [])


  return (<>
    <div  className={`flex xl:justify-evenly justify-between top-0  items-center fixed z-50  w-full text-${textColor} bg-${bgColor} flex-wrap  border-b-2 ${isShow && "bg-color-black"}`}>
      <div className="flex p-2 justify-center items-center">
      <div className="flex justify-center items-center">
      <img src={` ${isShow? "../chef-whiteLogo.svg":isColorWhite}`} alt="Logo" className="w-12" />
    </div>
  <span className={`text-bold  xl:text-4xl text-3xl  ${isShow&& " text-white "}`}>Sicily</span>
      </div>
      <div className="xl:flex hidden mt-6  font-bold items-center">
        <ul className="flex xl:gap-8 gap-6 text-sm xl:text-md">
          <div className=" group hover:text-primary-600 cursor-pointer transition ease-in-out delay-100 py-2  text-center">
            <li> <Link href={"/"}>DISCOVER</Link></li>
            <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600  inline-block transition ease-in-out delay-100 " />
          </div>
          <div className="hover:text-primary-600 group cursor-pointer transition ease-in-out delay-100  py-2   text-center">
            <li> <Link href={"/menu"}>OUR MENU</Link></li>
            <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
          </div>

          <div className="hover:text-primary-600 group cursor-pointer transition ease-in-out delay-100  py-2  text-center">
            <li><Link href={"/about"}>ABOUT US</Link></li>
            <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
          </div>

          <div className="hover:text-primary-600 group cursor-pointer transition ease-in-out delay-100  py-2  text-center">
            <li> <Link href={"/gallery"}>GALLERY</Link></li>
            <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
          </div>
          <div className="hover:text-primary-600 group cursor-pointer transition ease-in-out delay-100  py-2  text-center">
            <li>
              <Link href={"/contact"}>CONTACT</Link>
            </li>
            <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
          </div>
        </ul>
      </div>

      <div className=" bg-gradient-to-r from-primary-900 to-primary-500 my-2 p-1 text-white xl:flex hidden">
        <div className="flex items-center px-2  xl:px-6 bg-transparent border-white-400 border-2 border-solid">
          <Link href={"/booktable"} className="cursor-pointer p-2 xl:text-md text-sm">BOOK A TABLE</Link>
          <ArrowLongRightIcon className="md:h-6 md:w-6" />
        </div>
      </div>
      {
        isShow ?
          <XMarkIcon className="h-6 w-6 xl:hidden flex mr-2 text-white" onClick={() => setIsShow(!isShow)}/>
          :
          <Bars3Icon className="h-6 w-6 xl:hidden flex mr-2" onClick={() => setIsShow(!isShow)} />
   }

    </div>
      {isShow &&
        <div className="w-full  flex-row bg-black md:pt-[15%] pt-[30%] absolute top-[12%] left-0 z-50 h-fit text-white animate xl:hidden ">
        <ul className="inline-block gap-8 delay">
            <div className=" hover:text-primary-600 group cursor-pointer transition ease-in-out delay-100 py-2  text-center">
              <li><Link href={"/"}>DISCOVER</Link></li>
              <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
            </div>
            <div className="hover:text-primary-600 group cursor-pointer transition ease-in-out delay-100  py-2   text-center">
              <li><Link href={"/menu"}>OUR MENU</Link></li>
              <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
            </div>
  
            <div className="hover:text-primary-600 group cursor-pointer transition ease-in-out delay-100  py-2  text-center">
              <li><Link href={"/about"}>ABOUT US</Link></li>
              <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
            </div>
  
            <div className="hover:text-primary-600  group cursor-pointer transition ease-in-out delay-100  py-2  text-center">
              <li><Link href={"/gallery"}>GALLERY</Link></li>
              <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
            </div>
            <div className="hover:text-primary-600 group cursor-pointer transition ease-in-out delay-100  py-2  text-center">
              <li> <Link href={"/contact"}>CONTACT</Link></li>
              <BsSuitDiamondFill className="text-transparent group-hover:text-primary-600 inline-block  transition ease-in-out delay-100" />
          </div>
          <div className="flex items-center   bg-transparent border-primary-600 border-b-2 border-solid ">
          <Link href={"/booktable"} className="cursor-pointer p-2 xl:text-md text-sm">BOOK A TABLE</Link>
          <ArrowLongRightIcon className="h-6 w-6 text-primary-600" />
          </div> 
       
        </ul>
      
    </div>
  }
  </>
  );
};

export default Navbar;
