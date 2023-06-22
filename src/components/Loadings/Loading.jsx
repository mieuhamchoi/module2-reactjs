import React from "react";
import Img from "../../logo.svg";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading_container">
      <img className="rotating-image" src={Img} />
    </div>
  );
}
