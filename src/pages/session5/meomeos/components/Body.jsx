import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import "./Body.scss";
import OurProducts from "./OurProducts";

export default function Body() {
  const slider = useRef();
  const [banners, setBanners] = useState([
    {
      id: 1,
      url: "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/8/photo1646707674185-1646707674296285845735.jpg",
    },
    {
      id: 2,
      url: "https://png.pngtree.com/background/20210709/original/pngtree-cosmetic-pink-background-simple-literary-picture-image_914316.jpg",
    },
    {
      id: 3,
      url: "https://tatacosmetic.vn/upload/news/5-nguyen-tac-xay-dung-thuong-hieu-my-pham-4134.jpg",
    },
    {
      id: 4,
      url: "https://tapchicongthuong.vn/images/23/2/21/my-pham-a.jpg",
    },
  ]);

  return (
    <>
      <Carousel
        ref={slider}
        autoplay
        autoplaySpeed={1000}
        effect={"fade"}
        dots={true}
        dotPosition={"top"}
        waitForAnimate={"true"}
      >
        {banners.map((banner, index) => (
          <div className="items" key={banner.id + index}>
            <img className="items-img" src={banner.url} />
          </div>
        ))}
      </Carousel>
      <OurProducts></OurProducts>
    </>
  );
}
