import React from "react";
import { Link } from "react-router-dom";
import IconArrowSmall from "../IconArrowSmall";
import "./Button.css";

function Button(props) {
  const { xcontinue } = props;

  return (
    <Link to="/summary-1" className="align-self-flex-center">
      <div className="button">
        <IconArrowSmall />
        <div className="continue acuminprosemicondensed-bold-white-14px">{xcontinue}</div>
      </div>
    </Link>
  );
}

export default Button;
