import React from "react";
import MyCustomBtn from "./common/myCustomBtn";

const CustomFourOhFour = () => {
  return (
    <>
      <div className="bg-image  h-screen  ">
        <div className="w-1/3 h-full pt-[20%] z-20 absolute">
          <div className="px-16  flex justify-start items-end flex-wrap">
            <h2 className="color-icon w-full">ERROR 404 </h2>
            <h3 className="w-full text-white text-3xl py-8">
              Oh no ... Sounds Like there's too mutch Salt in this dish!
            </h3>
            <MyCustomBtn
              color="[#333]"
              text="BACK TO HOME"
              bg="bg-white"
              size="14px"
              link="/"
            />
          </div>
        </div>
      </div>
      <div className="bg-black absolute top-0 left-0 w-full h-full opacity-[0.6] z-10" />
    </>
  );
};

export default CustomFourOhFour;
