import React from 'react';

import SVGIcons from '../SVGIcons/SVGIcons';
import './Header.scss';

const Header = () => {
  return (
    <>
      <header className="App-header">
        <div className="wrap website-width">
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
      </header>
      <div className="website-width website-logo-wrap">
        <span className="logo">NEW2ARIZONA</span>
      </div>
    </>
  );
}

export default Header;