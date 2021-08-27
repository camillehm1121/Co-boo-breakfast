import React from "react";
import Component9512 from "../Component9512";
import "./HomeHeading.css";

function HomeHeading(props) {
  const { todaysFeed, component9512Props } = props;

  return (
    <div className="home-heading">
      <div className="overlap-group1-1">
        <Component9512 overlapGroup4={component9512Props.overlapGroup4} group1Props={component9512Props.group1Props} />
        <div className="todays-feed arial-regular-normal-white-25px">{todaysFeed}</div>
      </div>
    </div>
  );
}

export default HomeHeading;
