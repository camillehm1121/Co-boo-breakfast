import React from "react";
import Card132 from "../Card132";
import "./Group2594.css";

function Group2594(props) {
  const { discoverByMeal, path11543, card132Props } = props;

  return (
    <div className="group-2594">
      <div className="overlap-group4">
        <Card132 totalCo2Props2={card132Props.totalCo2Props2} />
        <div className="discover-by-meal quicksand-bold-white-20px">{discoverByMeal}</div>
        <img className="path-11543" src={path11543} />
      </div>
    </div>
  );
}

export default Group2594;
