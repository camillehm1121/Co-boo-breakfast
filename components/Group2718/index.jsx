import React from "react";
import Layer23 from "../Layer23";
import Iconadd from "../Iconadd";
import "./Group2718.css";

function Group2718(props) {
  const { layer2Props } = props;

  return (
    <div className="group-2718">
      <Layer23 src={layer2Props.src} />
      <Iconadd />
    </div>
  );
}

export default Group2718;
