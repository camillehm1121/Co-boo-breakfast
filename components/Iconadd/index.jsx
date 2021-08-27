import React from "react";
import "./Iconadd.css";

function Iconadd(props) {
  const { className } = props;

  return <div className={`iconadd ${className || ""}`}></div>;
}

export default Iconadd;
