import React, { useEffect } from "react";

import Header from "../../Components/Header";
import Intro from "../../Components/Intro";
import VisualAndText from "../../Components/VisualAndText";
import Section2 from "../../Components/Section2";
import Form from "../../Components/Form";
import Footer from "../../Components/Footer";
import data from "../../data";
import family from "../../Assets/Images/family.png";
import arizona from "../../Assets/Images/arizona.png";
import SVGIcons from '../../Assets/SVGIcons/SVGIcons';
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="App">
      <Header />
      <Intro />
      <VisualAndText src={arizona} text={data.section1} hasImage bullets />
      <Section2 data={data} img={family} />
      <div className="full-width-bg">
        <p>Take Action</p>
        <p> Start Living the Good Life in Arizona! </p>
      </div>
      <Form />
      <section className="button-links website-width">
        <Link to="/TaxExodus">The Great Tax Exodus <SVGIcons name='Chevron' /></Link>
        <Link to="/LeavingCalifornia">Leaving the Golden State <SVGIcons name='Chevron' /></Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
