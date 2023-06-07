
import React from 'react'

import "../globals.css"
import Navbar from '../Navbar';
import { Providers } from '../Providers';
import Footer from './footer';






export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};




 const RootLayout =({
  children,
}: {
  children: React.ReactNode;
}) =>{
  return (
    <html lang="en">
  
     <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
     </head>
   
    
  
      <body>
      <Navbar bgColor="white" textColor="black" />
        <Providers>
        
        {children}
       
        </Providers>
      <Footer/>
      </body>
    </html>
  );
}
export default RootLayout;