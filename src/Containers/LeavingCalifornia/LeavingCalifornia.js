import React, { useEffect } from "react";

import Header from "../../Components/Header";
import Intro from "../../Components/Intro";
import Section3 from "../../Components/Section3";
import Footer from "../../Components/Footer";
import data from "../../data";

const LeavingCalifornia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="App">
      <Header />
      <Intro />
      <Section3 data={data} />
      <Footer />
    </div>
  );
};

export default LeavingCalifornia;
