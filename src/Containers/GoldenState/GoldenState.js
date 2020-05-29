import React, { useEffect } from "react";
import ReactPixel from 'react-facebook-pixel';

import Header from "../../Components/Header";
import Intro from "../../Components/Intro";
import Footer from "../../Components/Footer";
import data from "../../data";
import Video from '../../Components/Video';
import SEO from "../../Components/SEO";

const GoldenState = () => {

  useEffect(() => {
    ReactPixel.init('269259011104810');
    ReactPixel.pageView();
  }, []);

  return (
    <>
      <SEO title="Leaving The Golden State" />
      <div className="App">
        <div >
          <Header />
          <Intro />
        </div>
        <div id="content" className="website-width leaving-cal-section">
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
