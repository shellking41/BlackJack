import React from "react";
import style from "./ComponentStyles/Shaker.module.css";

function Shaker({ children, ShakerRef }) {
  return <div ref={ShakerRef}>{children}</div>;
}

export default Shaker;
