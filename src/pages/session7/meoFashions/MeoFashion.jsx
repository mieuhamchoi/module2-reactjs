import React, { useState } from 'react'
import './meoFashion.scss'

import Navbar from './components/Navbar'
import CarouselBox from './components/CarouselBox'
import BannerBox from './components/BannerBox'
import DealOfWeek from './components/DealOfWeek'
import Footers from './components/Footers'

export default function MeoFashion() {

  return (
    <div className='meoFashion_container'>
      {/* Nav bar */}
      <Navbar />
      {/* Carousel */}
      <CarouselBox />
      {/* Banner */}
      <BannerBox />
      {/* Deal of weeks section */}
      <DealOfWeek />
      <div style={{height: "200px"}}></div>
      {/* Footers */}
      <Footers />
    </div>
  )
}
