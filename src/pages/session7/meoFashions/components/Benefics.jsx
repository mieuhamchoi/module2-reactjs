import React, { useState } from "react";
import { randomId } from '@mieuteacher/meomeojs'
export default function Benefics() {
  const [benefics, setBenefics] = useState([
    {
      id: 0,
      up: "FREE SHIPPING",
      down: "cứ mua là ship ha ha ha ha",
      iconClass: "item_img fa-solid fa-truck",
    },
    {
      id: 1,
      up: "CASH ON DELIVERY",
      down: "thanh toán khi nhận hàng",
      iconClass: "item_img fa-regular fa-money-bill-1",
    },
    {
      id: 2,
      up: "45 DAY'S RETURN",
      down: "hoàn trả trong 45 ngày",
      iconClass: "item_img fa-sharp fa-solid fa-arrow-rotate-left",
    },
    {
      id: 3,
      up: "OPENNING ALL WEEK",
      down: "mở cửa cả tuần",
      iconClass: "item_img fa-sharp fa-regular fa-clock",
    },
  ]);

  return (
    <div className="benefics animate-on-scroll">
      <div className="benefics_contents">
        {benefics.map((benefic, index) => (
          <div key={randomId()} className="benefic_items">
            <div className="left-content">
              <i className={benefic.iconClass}></i>
            </div>
            <div className="right-content">
              <span className="text-up">{benefic.up}</span>
              <span className="text-downn">{benefic.down}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
