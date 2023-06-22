import React from 'react'
import './MenuBtn.scss'
export default function MenuBtn(props) {
  return (
    <div className={`menu-btn ${props.open ? 'open' : ''}`}>
        <div className="menu-btn__burger"></div>
    </div>
  )
}
