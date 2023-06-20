import React from 'react'

export default function Footers() {
  return (
    <div className='Footers'>
        <div className='topContents'>
            <div className='leftContents'> 
                <span className='contens-item'>Blog</span>
                <span className='contens-item'>FAQs</span>
                <span className='contens-item'>Contact us</span>
            </div>
            <div className='rightContents'>
                <i className="contens-item fa-brands fa-facebook-f"></i>
                <i className="contens-item fa-brands fa-twitter"></i>
                <i className="contens-item fa-brands fa-instagram"></i>
                <i className="contens-item fa-brands fa-pinterest-p"></i>
            </div>
        </div>
        <span className='liscence'>@2023 All Rights Reserved. This template in made with by <span style={{color: "red"}}>Meo Studio</span></span>
    </div>
  )
}
