import React from 'react'

const Header = () => {
    //header image tailwind css
  return (
      <div className="flex flex-wrap">
       
          <div className='w-1/2'>
              <h1>THE TASTE COMSE FIRST</h1> 
              <h2>Pull Up a Chair.Take a Taste.Join Us.Life is so endlessy.</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate similique saepe ea omnis quae corporis alias necessitatibus amet! Quibusdam eveniet magnam velit blanditiis molestias ab perspiciatis similique porro aperiam quo.</p>
          </div>
          <div className='w-1/2 flex justify-start flex-wrap p-5 relative p-28'>
              <img className='w-full object-cover'  src='./header-img-big.jpg' alt='restaurant-custumers'></img>
              <img className='w-1/4 border-t-8 object-cover  border-r-8 border-solid border-white absolute top-80 left-0 z-10' src='./header-img-small.jpg' alt='restaurant-foods'/>
          </div>
    </div>
  )
}

export default Header;