import React from 'react';
import { Link } from 'react-router-dom';

import EXPRealtyImg from '../../Assets/Images/eXpRealty-colored(RGB).png';
import equalOpportunityImg from '../../Assets/Images/equal-high-res.png';
import SVGIcons from '../../Assets/SVGIcons/SVGIcons';
import './Header.scss';

const Header = () => {
  return (
    <>
      <header className="App-header">
        <div className="wrap website-width">
          <div className="social">
            <div className="social-icon-text">
              <a href="https://twitter.com/RaymondKerege">
                <SVGIcons className="social-icon" name="Twitter" />
                <span>twitter.com</span></a>
            </div>
            <div className="social-icon-text">
              <a href="https://www.facebook.com/HomesinAnthemArizona/"><SVGIcons className="social-icon" name="Facebook" />
                <span>facebook.com</span></a>
            </div>
          </div>
          <div className="legal-images">
            <img className="exp-img" src={EXPRealtyImg} alt="EXP Realty"/>
            <img className="equal-img" src={equalOpportunityImg} alt="Equal Opportunity Housing"/>
          </div>
        </div>
      </header>
      <div className="website-width website-logo-wrap">
        <span className="logo"><Link to="/">NEW2ARIZONA</Link></span>
      </div>
    </>
  );
}

export default Header;