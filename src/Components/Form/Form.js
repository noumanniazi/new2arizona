import React from 'react';

import Formimg from '../../Assets/Images/Formimg.png'

import './Form.scss';

const Form = () => {
    return (
        <div className="intro-wrap">
      <div className="intro-img">
        <img className="intro-bg" src={backgimg} />
        <div className="layer"></div>
      </div>
      <div className="website-width intro-content">
        <div className="heading">Last year, over 68,000 California residents moved to Arizona and there’s several reasons why... </div>
        <div className="text">
          The exodus is caused by unsustainable housing prices, high taxes, grid lock traffic, high cost of living, crime and now legal crime, politics, immigration, homelessness, jobs are moving out of state, continuous natural disasters, unprecedented amount of regulations, electricity and water shortages ....the list goes on and on.
        </div>
      </div>
    </div>
    );
}

export default Form;