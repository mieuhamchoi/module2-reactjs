import React, { useState } from 'react'
import './MeoMeo.scss';

import Navbar from "./components/Navbar"
import Body from "./components/Body"



export default function MeoMeo() {
  return (
    <div className='meomeo__container'>
        <Navbar></Navbar>
        <Body></Body>
    </div>
  )
}
