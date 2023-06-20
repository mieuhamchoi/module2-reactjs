import React, {useState} from 'react'
import { Carousel } from "antd";
export default function CarouselBox() {
    const [banners, setBanners] = useState([
        {
          id: 1,
          url: "https://api.mieuhamchoi.fun/uploads/picture/subject/1686589830027-989883059.jpg",
          urlHistory: "SPING / SUMMONER COLLECTION 2017",
          des: "Get up to 30% Off New Arrivals"
        },
        {
          id: 2,
          url: "https://api.mieuhamchoi.fun/uploads/picture/subject/1686589830029-415606191.jpg",
          urlHistory: "SPING / SUMMONER COLLECTION 2017",
          des: "Get up to 30% Off New Arrivals"
        },
        {
          id: 3,
          url: "https://api.mieuhamchoi.fun/uploads/picture/subject/1686589830030-927781520.jpg",
          urlHistory: "SPING / SUMMONER COLLECTION 2017",
          des: "Get up to 30% Off New Arrivals"
        }
      ]);
  return (
    <Carousel
    autoplay
    autoplaySpeed={2500}
    className='carousels'
  >
    {banners.map((banner, index) => (
      <div className="items" key={banner.id + index}>
        <img className="items-img" src={banner.url} />
        <div className='items-content'>
           <span className='history'>{banner.urlHistory.toUpperCase()}</span>
           <span className='des'>{banner.des}</span>
           <button type="button" className="btn btn-danger btn_buy">SHOP NOW</button>
        </div>   
      </div>
    ))}
  </Carousel>
  )
}
