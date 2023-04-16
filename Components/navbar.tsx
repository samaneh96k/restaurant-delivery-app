import React, { useState } from "react";
import { ArrowLongRightIcon ,Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import { BsSuitDiamondFill } from 'react-icons/bs';




const Navbar = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (<>
    <div className={`flex xl:justify-evenly justify-between items-center fixed z-20 w-full bg-white flex-wrap  border-b-2 ${isShow&& "bg-neutral-700 md:bg-white"}`}>
      <div className="flex p-2 justify-center items-center">
      <div className="flex justify-center items-center">
      <img src={`${isShow?"./chef-whiteLogo.svg":"./chef-restaurant-logo-publicdomainvectors.svg"}`} alt="Logo" className="logo-image" />
    </div>
  <span className={`text-bold  xl:text-4xl text-3xl  ${isShow&& "md:text-black text-white "}`}>Sicily</span>
      </div>
      <div className="xl:flex hidden mt-6  font-bold items-center">
        <ul className="flex xl:gap-8 gap-6 text-sm xl:text-md">
          <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100 py-2 navbar-menu-item">
            <li>DISCOVER</li>
            <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
          </div>
          <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100  py-2  navbar-menu-item">
            <li>OUR MENU</li>
            <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
          </div>

          <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100  py-2 navbar-menu-item">
            <li>ABOUT US</li>
            <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
          </div>

          <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100  py-2 navbar-menu-item">
            <li>GALLERY</li>
            <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
          </div>
          <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100  py-2 navbar-menu-item">
            <li>CONTACT</li>
            <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
          </div>
        </ul>
      </div>

      <div className=" bg-gradient-to-r from-[#ab795e] to-[#d3aa77] my-2 p-1 text-white xl:flex hidden">
        <div className="flex items-center px-2  xl:px-6 bg-transparent border-white-400 border-2 border-solid">
          <a className="cursor-pointer p-2 xl:text-md text-sm">BOOK A TABLE</a>
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
        <div className="w-full  flex-row bg-neutral-700  h-screen text-white animate xl:hidden ">
        <ul className="inline-block gap-8 delay">
            <div className=" hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100 py-2 navbar-menu-item">
              <li>DISCOVER</li>
              <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
            </div>
            <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100  py-2  navbar-menu-item">
              <li>OUR MENU</li>
              <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
            </div>
  
            <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100  py-2 navbar-menu-item">
              <li>ABOUT US</li>
              <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
            </div>
  
            <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100  py-2 navbar-menu-item">
              <li>GALLERY</li>
              <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
            </div>
            <div className="hover:text-[#cd9473] cursor-pointer transition ease-in-out delay-100  py-2 navbar-menu-item">
              <li>CONTACT</li>
              <BsSuitDiamondFill className="text-transparent under-menu inline-block  transition ease-in-out delay-100" />
          </div>
          <div className="flex items-center   bg-transparent border-[#cd9473] border-b-2 border-solid ">
          <button className="cursor-pointer p-2 text-[#cd9473]">BOOK A TABLE</button>
          <ArrowLongRightIcon className="h-6 w-6 text-[#cd9473]" />
          </div> 
       
        </ul>
      
    </div>
  }
  </>
  );
};

export default Navbar;
