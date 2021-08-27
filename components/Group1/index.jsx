import React from "react";
import Network4 from "../Network4";
import Battery from "../Battery";
import "./Group1.css";

function Group1(props) {
  const { className, networkProps } = props;

  return (
    <div className={`group-1 ${className || ""}`}>
      <div className="wifi"></div>
      <Network4 path67={networkProps.path67} path68={networkProps.path68} />
      <Battery />
      <div className="text roboto-normal-white-13px">12:30</div>
    </div>
  );
}

export default Group1;
