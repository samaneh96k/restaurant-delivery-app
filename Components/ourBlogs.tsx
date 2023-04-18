import Link from 'next/link'
import React from 'react'

const OurBlogs = () => {
  return (
      <div className="h-full w-full flex flex-wrap xl:mb-[10%]">
                <div className="relative  w-full h-full mt-[22%] sm:mt-[4%] md:mt-[8%] xl:mt-0">
        <div className="bg-black absolute xl:top-[0]  left-0 w-full h-full opacity-[0.6] z-20">
        </div>
        <div className=" absolute top-[30%] sm:p-0 px-2 sm:top-[40%] xl:top-[50%] left-0 w-full h-fit  z-20 text-center">
          <h2 className="xl:text-xl sm:text-xs text-[8px] color-icon">OUR BLOGS </h2>
          <h2 className="xl:text-4xl sm:text-xs text-[8px] text-white">
          Read the stories behind our unique taste & Presentation
          </h2>
          <span className="xl:text-xl text-xs text-white">~~~~</span>
        </div>
        <div className="aspect-w-4 aspect-h-1 ">
          <img
            className=" object-center object-cover   h-full w-full "
            src="../img/05.jpg"
            alt="restaurant-foods"
          />
        </div>
          </div>
          
          
          <div className='w-full flex px-8 justify-center flex-wrap text-xs md:text-xl'>
              <div className='xl:w-2/3 flex flex-wrap'>
                  <div className='xl:w-1/2 w-full p-8 '>
                      <div className='aspect-w-4 aspect-h-2 '>
                      <img
            className=" object-center object-cover rounded   h-full w-full "
            src="../img/02.jpg"
            alt="restaurant-foods"
          />
                      </div>
                      <div className='w-full  divide-y divide-slate-400'>
                          <div>
                          <h2 className='font-bold  '>ipsum dolor sit amet consectetur adipisicing elit</h2>
                          <p className='my-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam magnam officia distinctio? Animi adipisci hic ullam sed ex amet eveniet optio, explicabo sunt sint non, laborum officia praesentium facere? Cumque! </p>
                </div>
                       
                          <div className='flex py-4'><h3 className='font-bold'>ART</h3>/ <p>SEP 17.2023</p></div>
                      </div>
                     

                      
                  </div>

                  <div className='xl:w-1/2 w-full p-8 '>
                      <div className='aspect-w-4 aspect-h-2 '>
                      <img
            className=" object-center object-cover rounded  h-full w-full "
            src="../img/01.jpg"
            alt="restaurant-foods"
          />
                      </div>
                      <div className='w-full  divide-y divide-slate-400'>
                          <div>
                          <h2 className='font-bold text-x '>ipsum dolor sit amet consectetur adipisicing elit</h2>
                          <p className='my-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam magnam officia distinctio? Animi adipisci hic ullam sed ex amet eveniet optio, explicabo sunt sint non, laborum officia praesentium facere? Cumque! </p>
                </div>
                       
                          <div className='flex py-4'><h3 className='font-bold'>ART</h3>/ <p>SEP 17.2023</p></div>
                      </div>
                     

                      
                  </div>

                  <div className='xl:w-1/2 w-full p-8 '>
                      <div className='aspect-w-4 aspect-h-2 '>
                      <img
            className=" object-center object-cover rounded  h-full w-full "
            src="../img/03.jpg"
            alt="restaurant-foods"
          />
                      </div>
                      <div className='w-full  divide-y divide-slate-400'>
                          <div>
                          <h2 className='font-bold  '>ipsum dolor sit amet consectetur adipisicing elit</h2>
                          <p className='my-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam magnam officia distinctio? Animi adipisci hic ullam sed ex amet eveniet optio, explicabo sunt sint non, laborum officia praesentium facere? Cumque! </p>
                </div>
                       
                          <div className='flex py-4'><h3 className='font-bold'>ART</h3>/ <p>SEP 17.2023</p></div>
                      </div>
                     

                      
                  </div>

                  <div className='xl:w-1/2 w-full p-8 '>
                      <div className='aspect-w-4 aspect-h-2 '>
                      <img
            className=" object-center object-cover rounded  h-full w-full "
            src="../img/04.jpg"
            alt="restaurant-foods"
          />
                      </div>
                      <div className='w-full  divide-y divide-slate-400'>
                          <div>
                          <h2 className='font-bold  '>ipsum dolor sit amet consectetur adipisicing elit</h2>
                          <p className='my-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam magnam officia distinctio? Animi adipisci hic ullam sed ex amet eveniet optio, explicabo sunt sint non, laborum officia praesentium facere? Cumque! </p>
                </div>
                       
                          <div className='flex py-4'><h3 className='font-bold'>ART</h3>/ <p>SEP 17.2023</p></div>
                      </div>
                     

                      
                  </div>

                  <div className='xl:w-1/2 w-full p-8 '>
                      <div className='aspect-w-4 aspect-h-2 '>
                      <img
            className=" object-center object-cover rounded  h-full w-full "
            src="../img/05.jpg"
            alt="restaurant-foods"
          />
                      </div>
                      <div className='w-full  divide-y divide-slate-400'>
                          <div>
                          <h2 className='font-bold  '>ipsum dolor sit amet consectetur adipisicing elit</h2>
                          <p className='my-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam magnam officia distinctio? Animi adipisci hic ullam sed ex amet eveniet optio, explicabo sunt sint non, laborum officia praesentium facere? Cumque! </p>
                </div>
                       
                          <div className='flex py-4'><h3 className='font-bold'>ART</h3>/ <p>SEP 17.2023</p></div>
                      </div>
                     

                      
                  </div>

              
              </div>
              <div className='xl:w-1/4 divide-y divide-slate-400 p-8 rounded-1 shadow-2xl h-fit mx-auto my-4'>
                  <div>
                     shearch
                  </div>
                  <div className='p-4 font-bold'>
                      <h2 className='color-icon '>CATEGORES</h2>
                      <div className=''>
                   <h2>   <Link href={"/"}>Art</Link></h2>
                   <h2>  <Link href={"/"}>Culture</Link></h2>
                   <h2> <Link href={"/"}>People</Link></h2>
                   <h2> <Link href={"/"}>Commerce</Link></h2>
                   <h2>  <Link href={"/"}>Uncategories </Link></h2>
                 </div>
                  </div>

                  <div className='p-4 font-bold'>
                      <h2 className='color-icon '>ARCHIVE</h2>
                      <div className=''>
                   <h2>  <Link href={"/"}>April 2023</Link></h2>
                   <h2>   <Link href={"/"}>NOVAMR 2022</Link></h2>
                   <h2> <Link href={"/"}>SEPTAMBER 2022</Link></h2>
                   <h2>  <Link href={"/"}>December 2022 </Link></h2>
                   <h2> <Link href={"/"}>July 2022</Link></h2>
                 </div>
                  </div>
                  <div className='p-4 font-bold'>
                      <h2 className='color-icon '>TAGS</h2>
                      <div className='flex flex-wrap text-white'>
                   <h2 className='bg-[#333] px-4 py-2 w-fit h-fit rounded m-2'>   <Link href={"/"}>Art</Link></h2>
                   <h2 className='bg-[#333] px-4 py-2 w-fit h-fit rounded m-2'>  <Link href={"/"}>Culture</Link></h2>
                   <h2 className='bg-[#333] px-4 py-2 w-fit h-fit rounded m-2'> <Link href={"/"}>People</Link></h2>
                   <h2 className='bg-[#333] px-4 py-2 w-fit h-fit rounded m-2'> <Link href={"/"}>Commerce</Link></h2>
                   <h2 className='bg-[#333] px-4 py-2 w-fit h-fit rounded m-2'>  <Link href={"/"}>Uncategories </Link></h2>
                 </div>
                  </div>
          
</div>
          </div>
    </div>
  )
}

export default OurBlogs