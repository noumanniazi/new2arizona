import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import './SuccessMessage.scss'

const SuccessMessage = () => {
  return (
    <div className="App">
      <Header />
      <div className="success-message">Thank you for contacting us!</div>
      <Footer />
    </div>
  );
};

export default SuccessMessage;
