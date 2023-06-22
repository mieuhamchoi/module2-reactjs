import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Session6() {
  const location = useLocation();
  document.title = `HW | ${location.pathname
    .split("/")
    [location.pathname.split("/").length - 1].toUpperCase()}`;
  return (
    <>
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "25px",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {location.pathname.slice(1).toUpperCase()}
      </h1>
      <Outlet />
    </>
  );
}
