import React from 'react'
import './Home.scss'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation();
  document.title =`HW | ${'HOME PAGE'}`; 
  
  return (
    <div className='home_container'>
        <span className='home_sologan'>CÙNG NHAU HỌC THẬT TỐT</span>
    </div>
  )
}
