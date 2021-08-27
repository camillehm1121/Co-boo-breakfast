import React from "react";
import Component32322 from "../Component32322";
import TotalCo2 from "../TotalCo2";
import "./Card132.css";

function Card132(props) {
  const { totalCo2Props2 } = props;

  return (
    <div className="card-1">
      <div className="overlap-group1-3">
        <div className="group-2587">
          <div className="overlap-group2-1">
            <Component32322 />
            <TotalCo2
              totalCo={totalCo2Props2.totalCo}
              number={totalCo2Props2.number}
              generated={totalCo2Props2.generated}
            />
          </div>
        </div>
      </div>
      <img
        className="path-311"
        src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-311-1@1x.png"
      />
    </div>
  );
}

export default Card132;
