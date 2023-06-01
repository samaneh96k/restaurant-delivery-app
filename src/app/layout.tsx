
import React from 'react'

import "./globals.css"
import { Providers } from './Providers';










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
     
        <Providers>
        
        {children}
       
        </Providers>
      
      </body>
    </html>
  );
}
export default RootLayout;