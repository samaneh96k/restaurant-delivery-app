import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { CiFacebook,CiInstagram,CiTwitter } from "react-icons/ci";
import React from "react";
import MyCustomBtn from "../../common/myCustomBtn";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.7195397045!2d51.207572426827944!3d35.707492592581225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2sMilad%20Tower!5e0!3m2!1sen!2sde!4v1667291881970!5m2!1sen!2sde"
        width="100%"
        height="500px"
        title="googleMap"
     
       
        
   />
      
      <div className="mx-8  py-6 border-b-2 border-gray-500">
        <div className="text-left pl-2 text-primary-600 md:text-xl text-sm">SAVE 20% IN DETAILS </div>
        <div className="flex  items-center flex-wrap my-4">
          <div className="lg:w-1/2 lg:text-4xl xl:text-5xl w-full text-xl md:text-3xl text-left ">
            <h2>Our Weekly Newsletter</h2>
          </div>
          <div className="flex lg:w-1/2 w-full mt-4">
            <form className="flex justify-evenly items-center w-full flex-wrap">
              <input type="text" placeholder="TYPE YOUR EMAIL" className="lg:w-3/6 text-sm text-white outline-none border-b-2 border-white bg-dark w-2/3 p-2" />
              <MyCustomBtn color="dark" text="SUBSCRIBE" bg="bg-white" size="14px" link="/"/>
            </form>
          </div>
              </div>
              <div className="text-left"><h1>~~~~~~</h1></div>
      </div>
          <div className="flex text-left p-8 flex-wrap ">
              
              <div className="md:w-1/4 w-full mb-4" >
                  <div className="text-primary-600">MORE</div>
                 
                 <div> <Link href="/blogs" className="cursor-pointer">Our Blogs</Link></div>
                 <div> <a href="#" className="cursor-pointer  ">Contact Us</a></div>
                 <div> <a href="#" className="cursor-pointer  ">Delivery System</a></div>
                 <div> <Link href="/login" className="cursor-pointer">  Admin</Link></div>
                
                
              </div>
              <div className="md:w-2/6 w-full mb-4">
              <div className="text-primary-600">CONTACT US</div>
              <div> +891 364 7415</div>
                 <div> samanehkarimi17@gmail.com</div>
                 <div> 118 Canis Heights Drive</div>
                 <div> Los Angeles ,CA</div>
              </div>
              <div className="md:w-2/6 w-full">
                  
              <div className="text-primary-600">FOLLOW US</div>
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
