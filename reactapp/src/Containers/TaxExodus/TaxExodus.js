import React, { useEffect } from "react";
import ReactPixel from 'react-facebook-pixel';

import Header from "../../Components/Header";
import Intro from "../../Components/Intro";
import Section3 from "../../Components/Section3";
import Footer from "../../Components/Footer";
import data from "../../data";
import SEO from "../../Components/SEO";

const TaxExodus = () => {

  useEffect(() => {
    ReactPixel.init('269259011104810');
    ReactPixel.pageView();
  }, []);

  return (
    <>
      <SEO title="Tax Exodus" />
      <div className="App">
        <Header />
        <Intro />
        <Section3 data={data} />
        <Footer />
      </div>
    </>
  );
};

export default TaxExodus;
