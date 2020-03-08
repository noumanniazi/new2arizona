import React from 'react';

import Video from '../Video';
import './Section3.scss';

const Section3 = (props) => {
    const { data } = props;
    return (
        <div className="website-width leaving-cal-section">
            <Video url="https://www.youtube.com/embed/4zqF4YENmFs"/>
            <div className="leaving-cal-text">
                <h2>{data.section3.heading}</h2>
                <p>{data.section3.paragraphs[0]}</p>
            </div>
        </div>
    );
}

export default Section3;