import React from "react";
import "./Layer23.css";

function Layer23(props) {
  const { src, className } = props;

  return (
    <div className={`layer-2 ${className || ""}`}>
      <div className="overlap-group1-2">
        <div className="invisible-box"></div>
        <div className="q3-icons" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    </div>
  );
}

export default Layer23;
