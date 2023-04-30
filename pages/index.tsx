
import { Inter } from 'next/font/google'
import Navbar from '@/Components/navbar'
import Footer from '@/Components/footer'
import Header from '@/Components/header'
import MottoSection from '@/Components/mottoSection'
import ServiceAptions from '@/Components/ServiceAptions'
import TodayMenu from '@/Components/todayMenuSection'

// import  {ReactQueryDevtools}  from '@tanstack/react-query-devtools';

// import {
//   QueryClient,
//   QueryClientProvider,
  
// } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const queryClient = new QueryClient()
  return (
    // <QueryClientProvider client={queryClient}>
    <>
      <Navbar bgColor="white" textColor="black" />
      <Header />
      <MottoSection />
      <TodayMenu/>
      <ServiceAptions/>
      <Footer />
      {/* <ReactQueryDevtools/>
    </QueryClientProvider> */}
      </>
  )
}
