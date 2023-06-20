import React, { useEffect, useState } from 'react'

export default function BannerBox() {
    const [bannerList, setBannerList] = useState(
        [
           {
              id: 0,
              bgimg: "https://api.mieuhamchoi.fun/uploads/picture/subject/1686591399786-582898268.jpg",
              des: "Women's"
           },
           {
              id: 1,
              bgimg: "https://api.mieuhamchoi.fun/uploads/picture/subject/1686591399786-778242796.jpg",
              des: "Accessories's"
           },
           {
              id: 2,
              bgimg: "https://api.mieuhamchoi.fun/uploads/picture/subject/1686591399787-571879000.jpg",
              des: "Men's"
           }
        ]
     )

   function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
         rect.top >= 0 &&
         rect.left >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
   }
   
   function animateOnScroll() {
      var elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(function(element) {
         if (isElementInViewport(element)) {
            element.classList.add('show');
         }
      });
   }

    useEffect(() => {
         let bodyFashionMeo = document.querySelector('.meoFashion_container');
         bodyFashionMeo.addEventListener('scroll', animateOnScroll);
         bodyFashionMeo.addEventListener('resize', animateOnScroll);
         
         // Thực hiện kiểm tra khi trang web được tải
         animateOnScroll();
   }, [])
  return (
    <div className='bannerBox'>
         <div className='bannerBox_contents'>
            {
               bannerList.map((banner, index) => 
                  <div key={banner.id + index} style={{backgroundImage: `url(${banner.bgimg})`}} className={index != 1 ? 'banner_items' : 'banner_items animate-on-scroll'} >
                     <div className='bannerDes'>
                        <span className='bannerDes-text'>{banner.des.toUpperCase()}</span>
                     </div>
                  </div>
               )
            }
         </div>
      </div>
  )
}
