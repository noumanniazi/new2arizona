import React from 'react';

import Video from '../Video';
import './Section3.scss';

const Section3 = (props) => {
    const { data } = props;
    return (
        <div className="website-width leaving-cal-section">
            <Video url="https://www.youtube.com/embed/eJcT3JbrDRw"/>
            <div className="leaving-cal-text">
                <h2>{data.section3.heading}</h2>
                <p>{data.section3.paragraphs[0]}</p>
                <p>
                Simply start by giving me a call at <a className="personal-info-link" href="tel:623-300-5074">623-300-5074</a> or email <a className="personal-info-link" href="mailto:Raymond@EnjoyArizonaLiving.com">Raymond@EnjoyArizonaLiving.com</a></p>
            </div>
        </div>
    );
}

export default Section3;