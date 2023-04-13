import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/navbar'
import Footer from '@/Components/footer'
import Header from '@/Components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    < >
      <Navbar />
      <Header/>
      <Footer/>
    </>
  )
}
