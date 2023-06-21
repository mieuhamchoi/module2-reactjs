import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function Session7() {
  const location = useLocation();
  return (
    <>
      <h1 style={{width: '100%', textAlign: 'center', fontSize: "25px", textDecoration: "underline", cursor: "pointer"}}>{location.pathname.slice(1).toUpperCase()}</h1>
      <Outlet />
    </>
  )
}
