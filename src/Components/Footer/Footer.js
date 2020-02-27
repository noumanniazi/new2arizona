import React from 'react';

import SVGIcons from '../SVGIcons/SVGIcons';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="website-width footer-content">
            <div className="footer-grid">
                <div className="footer-item">
                    <span><SVGIcons name='Website' /></span>
                    <a href="http://enjoyarizonaliving.com/">www.EnjoyArizonaLiving.com</a>
                </div>
                <div className="footer-item">
                    <span><SVGIcons name='Email' /></span>
                    <a href="mailto:Raymond@EnjoyArizonaLiving.com">Raymond@EnjoyArizonaLiving.com</a>
                </div>
                <div className="footer-item">
                    <p>Raymond Kerege, M.A. ePro, GRI, ABR, GRN,CPRES, iRep, Associate Broker</p>
                </div>
                <div className="footer-item">
                    <span><SVGIcons name='Call' /></span>
                    <a href="tel:623-300-5074">623-300-5074</a>
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;