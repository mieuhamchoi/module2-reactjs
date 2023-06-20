import React from 'react'

export default function Navbar() {
  return (
    <div className='meoFashion_navbar_couples'>
    <div className='meoFashion_navbar_up'>
      <div className='navbar_contents up'>
           <span className='contentSologanShip'>FREE SHIPPING ON ALL U.S ORDERS OVER $50</span>
           <div className='dropDown_groups'>
              <div className="dropdown dropdown-items">
                 <a className="item-btn btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    USD
                 </a>

                 <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">CAD</a></li>
                    <li><a className="dropdown-item" href="#">AUD</a></li>
                    <li><a className="dropdown-item" href="#">EUR</a></li>
                    <li><a className="dropdown-item" href="#">GBP</a></li>
                 </ul>
              </div>
              <div className="dropdown dropdown-items">
                 <a className="item-btn btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ENGLISH
                 </a>

                 <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">French</a></li>
                    <li><a className="dropdown-item" href="#">Italian </a></li>
                    <li><a className="dropdown-item" href="#">German</a></li>
                    <li><a className="dropdown-item" href="#">Spanish</a></li>
                 </ul>
              </div>
              <div className="dropdown dropdown-items">
                 <a className="item-btn btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                 </a>

                 <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i style={{marginRight: "5px"}} className="fa-solid fa-right-to-bracket"></i> Sign in</a></li>
                    <li><a className="dropdown-item" href="#"><i style={{marginRight: "5px"}} className="fa-solid fa-user-plus"></i> Register</a></li>
                 </ul>
              </div>
           </div>
      </div>
    </div>
    <div className='meoFashion_navbar_down'>
      <div className='navbar_contents down'>
           <div className='logos'>
              <span style={{color: "#21212A"}}>FASHION</span>
              <span style={{color: "#FE4B4F"}}>MEO</span>
           </div>
           <div className='menuTools'>
              <div className="menu"> 
                 <div className="dropdown dropdown-items">
                    <a className="item-btn btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       HOME
                    </a>
                 </div>
                 <div className="dropdown dropdown-items">
                    <a className="item-btn btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       SHOP
                    </a>

                    <ul className="dropdown-menu">
                       <li><a className="dropdown-item" href="#">Action</a></li>
                       <li><a className="dropdown-item" href="#">Another action</a></li>
                       <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                 </div>
                 <div className="dropdown dropdown-items">
                    <a className="item-btn btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       CONTACT
                    </a>

                    <ul className="dropdown-menu">
                       <li><a className="dropdown-item" href="#">Action</a></li>
                       <li><a className="dropdown-item" href="#">Another action</a></li>
                       <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                 </div>
              </div>
              <div className="tools">
                 <i className="tools_search fa-solid fa-magnifying-glass"></i>
                 <i className="tools_user fa-solid fa-user"></i>
                 <i className="tools_cart fa-solid fa-bag-shopping"></i>
              </div>
           </div>
      </div>
    </div>
  </div>
  )
}
