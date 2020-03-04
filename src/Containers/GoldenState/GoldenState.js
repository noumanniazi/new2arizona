import React, { useEffect } from "react";

import Header from "../../Components/Header";
import Intro from "../../Components/Intro";
import Footer from "../../Components/Footer";
import data from "../../data";
import Video from '../../Components/Video';

const GoldenState = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="App">
      <Header />
      <Intro />
      <div className="website-width leaving-cal-section">
        <Video url="https://www.youtube.com/embed/4zqF4YENmFs" />
        <div className="leaving-cal-text">
          <h2>{data.section4.heading}</h2>
          <p>{data.section4.paragraphs}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GoldenState;
