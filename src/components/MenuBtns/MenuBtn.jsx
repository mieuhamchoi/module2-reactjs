import React, { useEffect, useRef } from 'react'
import './MenuBtn.scss'
export default function MenuBtn(props) {
  const btnRef = useRef();
  useEffect(() => {
    btnRef.current.style.setProperty('--background-color', props.color ?  props.color : '#f5f4f4');
  }, [props.color])
  return (
    <div className={`menu-btn ${props.open ? 'open' : ''}`}>
        <div ref={btnRef} className="menu-btn__burger"></div>
    </div>
  )
}
