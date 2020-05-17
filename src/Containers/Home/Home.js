import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';

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
import SEO from '../../Components/SEO';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <SEO title="Home" />
      <div className="App">
        <Header />
        <Intro />
        <VisualAndText src={arizona} text={data.section1} hasImage bullets />
        <Section2 data={data} img={family} />
        <div className="full-width-bg">
          <p>
            <a className="reset-anchor-style" href="https://raymondkerege.exprealty.com/" target="_blank" rel="noopener noreferrer">Want to do a home search by yourself first before contacting me? That’s awesome! All you have to do is click this link and  start your search <u>https://raymondkerege.exprealty.com/</u></a>
          </p>
        </div>
        <Form />
        <section className="button-links website-width">
          <Link to="/TaxExodus#content">The Great Tax Exodus <SVGIcons name='Chevron' /></Link>
          <Link to="/LeavingCalifornia#content">Leaving the Golden State <SVGIcons name='Chevron' /></Link>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
