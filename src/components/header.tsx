"use client";
import React from "react";
import MyCustomBtn from "../common/myCustomBtn";


const Header = () => {
  return (
    <div className="flex flex-wrap justify-center w-full xl:mb-[10%] md:mb-[15%] mb-[25%] pt-[5%] xl:h-fit">
      <div className="xl:w-1/2 w-full  flex flex-wrap p-8 ">
        <div className="p-8 ">
          <div className="py-4">
            <h1 className="text-primary-600  xl:text-sm font-bold">
              THE TASTE COMSE FIRST
            </h1>
            <h2 className="xl:text-5xl text-2xl font-bold ">
              Pull Up a Chair.Take a Taste.Join Us.Life is so endlessy.
            </h2>
            <div className="text-left pt-8">
              <h1>~~~~~~</h1>
            </div>
          </div>

          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            similique saepe ea omnis quae corporis alias necessitatibus amet!
            Quibusdam eveniet magnam velit blanditiis molestias ab perspiciatis
            similique porro aperiam quo.
          </p>
          <MyCustomBtn color="white" text="BOOK A TABLE" bg="bg-slate-900" size="14px" link="/bookTable"/>
        </div>
      </div>

      <div className="w-[80%] xl:w-1/2 max-w-screen-sm relative ">
        <div className="aspect-w-4 aspect-h-2 ">
          <img
            className="object-cover object-center h-full w-full absolute   bottom-0 xl:top-12"
            src="./header-img-big.jpg"
            alt="restaurant-custumers"
          />
        </div>
        <div className="aspect-w-3 aspect-h-1  absolute  xl:bottom-10 md:bottom-0 bottom-[-15%] left-[-10%] xl:left-[-10%] h-1/4 w-2/4  ">
          <img
            className=" object-center border-8   xl:border-[16px] object-cover   border-solid border-white h-full w-full "
            src="./header-img-small.jpg"
            alt="restaurant-foods"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
