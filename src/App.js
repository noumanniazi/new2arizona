import React from 'react';

import Header from './Components/Header';
import Intro from './Components/Intro';
import VisualAndText from './Components/VisualAndText';
import Section2 from './Components/Section2';
import Form from './Components/Form';
import Section3 from './Components/Section3';
import Footer from './Components/Footer';
import data from './data';
import family from './Assets/Images/family.png';
import arizona from './Assets/Images/arizona.jpg';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <VisualAndText src={arizona} text={data.section1} hasImage bullets/>
      <Section2 data={data} img={family} />
      {/* <Form /> */}
      <Section3 data={data} />
      <Footer />
    </div>
  );
}

export default App;
