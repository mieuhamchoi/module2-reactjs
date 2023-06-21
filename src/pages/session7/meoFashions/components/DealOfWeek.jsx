import React, { useEffect, useState } from "react";

export default function DealOfWeek() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Đặt thời gian kết thúc đếm lùi (ở đây là 10 phút)
    var countdownDate = new Date();
    countdownDate.setMinutes(countdownDate.getMinutes() + 3600);

    // Cập nhật đồng hồ đếm lùi mỗi giây
    setInterval(function () {
      // Lấy thời gian hiện tại
      var now = new Date().getTime();

      // Tính thời gian còn lại
      var distance = countdownDate - now;

      // Tính toán các đơn vị thời gian
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000); // Mỗi giây
  }, []);

  return (
    <div className="dealOfWeeks animate-on-scroll">
      <div className="dealOfWeeks_imgbox">
        <img className="dealOfWeeks_img" src='https://api.mieuhamchoi.fun/uploads/picture/subject/1686592860306-273121484.png' />
      </div>
      <div className="dealOfWeeks_info">
        <div className="info_titles">
          <span className="info_title-text">Deal Of The Week</span>
          <span className="info_title-space">___</span>
        </div>
        <div className="info_times">
          <div className="times-item">
            <span className="item-value">{days}</span>
            <span className="item-unit">Days</span>
          </div>
          <div className="times-item">
            <span className="item-value">{hours}</span>
            <span className="item-unit">Hours</span>
          </div>
          <div className="times-item">
            <span className="item-value">{minutes}</span>
            <span className="item-unit">Mins</span>
          </div>
          <div className="times-item">
            <span className="item-value">{seconds}</span>
            <span className="item-unit">Secs</span>
          </div>
        </div>
        <button type="button" className="info_btn btn btn-dark">
          Shop Now
        </button>
      </div>
    </div>
  );
}
