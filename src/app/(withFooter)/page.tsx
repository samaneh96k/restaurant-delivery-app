
import ServiceAptions from '@/src/components/ServiceAptions'
import Header from '@/src/components/header'
import MottoSection from '@/src/components/mottoSection'
import TodayMenu from '@/src/components/todayMenuSection'
import { Metadata } from 'next';

import React from 'react'


const Homepage = () => {
  return (
    <>
      <Header />
      <MottoSection />
      <TodayMenu />
      <ServiceAptions/>
    </>
  )
}

export default Homepage
export const metadata: Metadata = {
  title: 'Sicily',
  description: 'restaurant',
};