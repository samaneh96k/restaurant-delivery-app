import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { CiFacebook,CiInstagram,CiTwitter } from "react-icons/ci";
import React from "react";
import MyCustomBtn from "./common/myCustomBtn";

const Footer = () => {
  return (
    <div className="bg-[#333] text-white">
      <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.7195397045!2d51.207572426827944!3d35.707492592581225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2sMilad%20Tower!5e0!3m2!1sen!2sde!4v1667291881970!5m2!1sen!2sde"
        width="100%"
        height="500px"
        title="googleMap"
     
        allowTransparency
        
   />
      
      <div className="mx-8  py-6 border-b-2 border-gray-500">
        <div className="text-left pl-2 text-[#ab795e] md:text-xl text-sm">SAVE 20% IN DETAILS </div>
        <div className="flex  items-center flex-wrap my-4">
          <div className="lg:w-1/2 lg:text-4xl xl:text-5xl w-full text-xl md:text-3xl text-left ">
            <h2>Our Weekly Newsletter</h2>
          </div>
          <div className="flex lg:w-1/2 w-full mt-4">
            <form className="flex justify-evenly items-center w-full flex-wrap">
              <input type="text" placeholder="TYPE YOUR EMAIL" className="lg:w-3/6 text-sm text-white outline-none border-b-2 border-[#ffff] bg-[#333] w-2/3 p-2" />
              {/* <button type="submit" className=" bg-[#ffff] my-4 p-1 text-[#333] lg:w-2/6">
                <div className="flex items-center  px-8 bg-transparent border-white-400 border-2 border-solid">
                  <a href="#" className="cursor-pointer p-2 text-sm lg:text-md">SUBSCRIBE</a>
                  <ArrowLongRightIcon className="xl:h-6 xl:w-6 h-3 w-3" />
                </div>
              </button> */}
              <MyCustomBtn color="[#333]" text="SUBSCRIBE" bg="bg-white" size="14px"/>
            </form>
          </div>
              </div>
              <div className="text-left"><h1>~~~~~~</h1></div>
      </div>
          <div className="flex text-left p-8 flex-wrap ">
              
              <div className="md:w-1/4 w-full mb-4" >
                  <div className="text-[#ab795e]">MORE</div>
                 
                 <div> <a href="#" className="cursor-pointer  ">OUR Blog</a></div>
                 <div> <a href="#" className="cursor-pointer  ">Contact Us</a></div>
                 <div> <a href="#" className="cursor-pointer  ">Delivery System</a></div>
                 <div> <a href="#" className="cursor-pointer  ">Terms Of Use</a></div>
                
                
              </div>
              <div className="md:w-2/6 w-full mb-4">
              <div className="text-[#ab795e]">CONTACT US</div>
              <div> +891 364 7415</div>
                 <div> samanehkarimi17@gmail.com</div>
                 <div> 118 Canis Heights Drive</div>
                 <div> Los Angeles ,CA</div>
              </div>
              <div className="md:w-2/6 w-full">
                  
              <div className="text-[#ab795e]">FOLLOW US</div>
                  <div className="flex justify-start">
                      <CiTwitter/>
                      <CiFacebook/>
                      <CiInstagram/>
              </div>
                 <div>2023  Silicy</div>
                 <div> Made by Me :)</div>
              
             
              </div>
      </div>
      <div className="text-3xl text-gray-500 py-4 text-center">Sicily</div>
    </div>
  );
};

export default Footer;
