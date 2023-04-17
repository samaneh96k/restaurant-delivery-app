import React from 'react'
import MyCustomBtn from './common/myCustomBtn'
import AboutUsChef from './AboutUsChef'

const AboutUsPage = () => {
  return (
< >   <div className="flex flex-wrap justify-center w-full xl:mb-[10%] md:mb-[15%] mb-[25%] pt-[10%] xl:h-fit ">
    <div className="xl:w-1/2 w-full  flex flex-wrap p-8 ">
      <div className="p-8 ">
        <div className="py-4">
          <h1 className="text-[#cd9473]  xl:text-sm font-bold">
            THE ADEA BEHIND
          </h1>
          <h2 className="xl:text-5xl text-2xl font-bold ">
           We Are better people when We have less on our plate.
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
        <MyCustomBtn color="white" text="CHECK THE MENU" bg="bg-slate-900" size="14px" link="/"/>
      </div>
    </div>

    <div className="w-[80%] xl:w-1/2 max-w-screen-sm relative ">
      <div className="aspect-w-4 aspect-h-2 ">
        <img
          className="object-cover object-center h-full w-full absolute   bottom-0 xl:top-12"
          src="../img/restaurant-aboutUs.jpg"
          alt="restaurant-custumers"
        />
      </div>
      <div className="aspect-w-3 aspect-h-1  absolute  xl:bottom-0 md:bottom-0 bottom-[-10%] left-[-10%] xl:left-[-15%] h-1/4 w-2/4  ">
        <img
          className=" object-center border-8   xl:border-[12px] object-cover   border-solid border-white h-full w-full "
          src="../img/Restourant-small-aboutAUs.jpg"
          alt="restaurant-foods"
        />
      </div>
    </div>
      </div>
         
      <AboutUsChef/>
      </>
      
  )
}

export default AboutUsPage