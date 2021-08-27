import React from "react";
import "./Title.css";

function Title(props) {
  const { children } = props;

  return <h1 className="title">{children}</h1>;
}

export default Title;
