import React from "react";

import Header from "../../Components/Header";
import Intro from "../../Components/Intro";
import Footer from "../../Components/Footer";
import data from "../../data";
import Video from '../../Components/Video';
import SEO from "../../Components/SEO";

const GoldenState = () => {
  return (
    <>
      <SEO title="Leaving The Golden State" />
      <div className="App">
        <div >
          <Header />
          <Intro />
        </div>
        <div className="website-width leaving-cal-section">
          <Video url="https://www.youtube.com/embed/eJcT3JbrDRw" />
          <div className="leaving-cal-text">
            <h2>{data.section4.heading}</h2>
            <p>{data.section4.paragraphs}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GoldenState;
