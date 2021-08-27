import React from "react";
import "./Component106272.css";

function Component106272(props) {
  const { home, setting } = props;

  return (
    <div className="component-106-12">
      <div className="overlap-group13">
        <div className="overlap-group1-5">
          <div className="group-2756" style={{ backgroundImage: `url(${home})` }}></div>
        </div>
        <img
          className="ico"
          src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/ico-10@1x.png"
        />
        <img className="setting" src={setting} />
        <div className="profile"></div>
      </div>
    </div>
  );
}

export default Component106272;
