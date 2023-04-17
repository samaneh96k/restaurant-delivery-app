import React from 'react'

const AboutUsChef = () => {
  return (
      <>
          <div className='border-t-[2px] w-1/5 mx-auto flex justify-center text-center'>  </div>
          <div className='flex flex-wrap justify-center '>
              <div className='color-icon w-full text-center pt-8'>Our Chef</div>
              <p className='text-3xl w-full font-bold text-center'>Meet The Talent behaind the taste</p>
              <span>~~~</span>
          </div>
 
          <div className=' flex flex-wrap '>
              <div className='flex flex-wrap justify-center items-center  w-1/3  p-12 gap-4'>
                  <div className='aspect-w-2 aspect-h-2 w-full object-cover object-center '>
                      <img src='../img/chef-photo.jpg' className='rounded'/>
                  </div>
                  <h2 className='text-2xl w-full text-center' >Ben Borneky</h2>
                  <p className='color-icon w-full text-center'>Main Chef</p>
              </div>
              <div className='flex flex-wrap justify-center items-center  w-1/3  p-12 gap-4'>
                  <div className='aspect-w-2 aspect-h-2 w-full object-cover object-center '>
                      <img src='../img/chef-2.jpg' className='rounded'/>
                  </div>
                  <h2 className='text-2xl w-full text-center' >Sarah Parker</h2>
                  <p className='color-icon w-full text-center'>MANAGER</p>
              </div>
              <div className='flex flex-wrap justify-center items-center  w-1/3  p-12 gap-4'>
                  <div className='aspect-w-2 aspect-h-2 w-full object-cover object-center '>
                      <img src='../img/chef-3.jpg' className='rounded'/>
                  </div>
                  <h2 className='text-2xl w-full text-center' >Chad Wiliams</h2>
                  <p className='color-icon w-full text-center'>SOUS Chef</p>
              </div>
              <div className='flex flex-wrap justify-center items-center  w-1/3  p-12 gap-4'>
                  <div className='aspect-w-2 aspect-h-2 w-full object-cover object-center '>
                      <img src='../img/chef-4.jpg' className='rounded'/>
                  </div>
                  <h2 className='text-2xl w-full text-center' >Brod carlos</h2>
                  <p className='color-icon w-full text-center'>SOUS Chef</p>
              </div>
              <div className='flex flex-wrap justify-center items-center  w-1/3  p-12 gap-4'>
                  <div className='aspect-w-2 aspect-h-2 w-full  '>
                      <img src='../img/chef-5.jpg' className='rounded object-cover object-center '/>
                  </div>
                  <h2 className='text-2xl w-full text-center' >Siena Allison</h2>
                  <p className='color-icon w-full text-center'>SOUS Chef</p>
              </div>
              
          </div>
    </>
  )
}

export default AboutUsChef