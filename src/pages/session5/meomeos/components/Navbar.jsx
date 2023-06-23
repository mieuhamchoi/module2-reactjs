import React, { useState } from "react";
import MenuBtn from "../../../../components/MenuBtns/MenuBtn";
export default function Navbar() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <div className="navbar">
      {/* <div
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
        className={menuBtnClassName}
      >
        <div className="menu-btn__burger"></div>
      </div> */}
      <div
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
      >
        <MenuBtn open={menuIsActive} />
      </div>
      <span className="title">MEOMEO</span>
      <div className="user_tools">
        <i className="tool tools_user fa-solid fa-user"></i>
        <i className="tool tools_cart fa-solid fa-bag-shopping"></i>
        <i className="tool tools_search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
