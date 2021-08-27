import React from "react";
import "./IconSearch.css";

function IconSearch(props) {
  const { src, className } = props;

  return (
    <div className={`icon-search ${className || ""}`}>
      <div className="overlap-group2-2">
        <div className="ellipse"></div>
        <img className="line" src={src} />
      </div>
    </div>
  );
}

export default IconSearch;
