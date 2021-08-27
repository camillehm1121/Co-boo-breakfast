import React from "react";
import "./TotalCo2.css";

function TotalCo2(props) {
  const { totalCo, number, generated } = props;

  return (
    <div className="total-co2">
      <div className="overlap-group10">
        <div className="total-co quicksand-medium-mountain-mist-12px">{totalCo}</div>
        <div className="number-4 quicksand-medium-mountain-mist-6px">{number}</div>
        <div className="generated quicksand-medium-mountain-mist-12px">{generated}</div>
      </div>
    </div>
  );
}

export default TotalCo2;
