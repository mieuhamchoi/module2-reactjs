import React from 'react'
import './meoFashion.scss'

import Navbar from './components/Navbar'
import CarouselBox from './components/CarouselBox'
import BannerBox from './components/BannerBox'
import DealOfWeek from './components/DealOfWeek'
import Footers from './components/Footers'
import Benefics from './components/Benefics'

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
      {/* Benefic */}
      <Benefics />
      {/* <div style={{height: "100px"}}></div> */}
      {/* Footers */}
      <Footers />
    </div>
  )
}
