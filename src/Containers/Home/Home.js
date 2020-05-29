import React, { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import ReactPixel from 'react-facebook-pixel';

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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ReactPixel.init('269259011104810');
    ReactPixel.pageView();
    setTimeout(()=>{
      setLoading(false);
    }, 200);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Home" />
      <div className={`loader ${!loading ? 'hide': ''}`}/>
      {!loading && (
        <div className="App">
          <Header />
          <Intro />
          <VisualAndText src={arizona} text={data.section1} hasImage bullets />
          <Section2 data={data} img={family} />
          <div className="full-width-bg search-home-section">
            <SVGIcons name="SearchHome" />
            <p>
              Want to do a home search by yourself first before contacting me? That’s awesome!
          </p>
            <p><a href="https://raymondkerege.exprealty.com/" target="_blank" rel="noopener noreferrer">CLICK HERE NOW TO SEARCH HOMES</a></p>
          </div>
          <Form />
          <section className="button-links website-width">
            <Link to="/TaxExodus#content">The Great Tax Exodus <SVGIcons name='Chevron' /></Link>
            <Link to="/LeavingCalifornia#content">Leaving the Golden State <SVGIcons name='Chevron' /></Link>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
