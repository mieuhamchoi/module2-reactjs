import React, { useState } from "react";

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
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  return (
    <div className="benefics animate-on-scroll">
      <div className="benefics_contents">
        {benefics.map((benefic, index) => (
          <div key={uuidv4()} className="benefic_items">
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
