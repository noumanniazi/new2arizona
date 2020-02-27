import React from "react";

import "./Intro.scss";
import backgimg from "../../Assets/Images/golfing.jpg";

const Intro = () => {
  return (
    <div className="intro-wrap">
      <div className="intro-img">
        <img className="intro-bg" src={backgimg} alt="golf" />
        <div className="layer"></div>
      </div>
      <div className="website-width intro-content">
        <div className="heading">Move to Phoenix, Arizona Now and Start Living the Good Life! </div>
      </div>
    </div>
  );
};

export default Intro;
