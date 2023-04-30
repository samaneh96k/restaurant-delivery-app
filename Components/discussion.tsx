import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { VscReply } from "react-icons/vsc";
import MyCustomBtn from "./common/myCustomBtn";
import Link from "next/link";

const Discussion = () => {
  return (
    <div className="w-3/5 mx-auto items-center justify-center xl:p-8  relative">
      <h2 className="md:text-3xl text-xl text-white p-2">
        Comments <span>37</span>
          </h2>
        
      <div className="flex  items-start justify-between py-4 xl:p-4 divide-y divide-gray-700 divide-y-reverse ">
        <div className="rounded-full border-1 rounded-red-200 xl:py-8 xl:px-8 py-4 px-4 bg-gray-400 ">
          {/* <img src="../img/01.jpg" alt="profileImage" /> */}
        </div>
        <div className=" xl:px-8 px-2 text-gray-200 ">
          <div className="flex flex-wrap justify-between items-center xl:text-xl text-sm">
            <div className="w-1/2">
              <h2 className="font-bold xl:text-xl text-sm">ali karimi</h2>
              <h3 className="xl:text-xl text-sm">20 min ago ...</h3>
            </div>
            <div className="flex w-1/2">
              <div className="flex  items-center">
                <AiOutlineHeart className="text-xl  mx-2 w-1/4" />
                <span>156</span>
              </div>
              <div className="flex  items-center">
                <VscReply className="text-xl  mx-2 w-1/4" />
                <span>18</span>
              </div>
            </div>
            <div className="w-full my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim et
              velit repellat repudiandae ea veniam, voluptate praesentium
              placeat nostrum nulla, id facere recusandae! Fuga quasi fugiat
              nostrum. Impedit, quasi sed!
            </div>
          </div>
        </div>
          </div>
      
          <div className=" absolute top-3/4 left-1/2 "> <div className=" bg-gradient-to-r from-[#ab795e] to-[#d3aa77] my-2 p-1 text-white xl:flex hidden">
        <div className="flex items-center px-2  xl:px-6 bg-transparent border-white-400 border-2 border-solid">
          <Link href={"/"} className="cursor-pointer p-2 xl:text-md text-sm">LOAD MORE</Link>
         
        </div>
      </div>
           </div>
    </div>
  );
};

export default Discussion;
