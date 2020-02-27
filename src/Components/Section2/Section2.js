import React from 'react';

import './Section2.scss';

const Section2 = (props) => {
    const { data, img } = props;
    return (<><div className={`website-width raymond-section`}>
        <div>
            <h2>{data.section2.heading}</h2>
            {data.section2.paragraphs.map((item, index) => <p key={`section2-para-${index}`}>{item}</p>)}
            <p>
                Simply start by giving me a call at <a className="personal-info-link" href="tel:623-300-5074">623-300-5074</a> or email <a className="personal-info-link" href="mailto:Raymond@EnjoyArizonaLiving.com">Raymond@EnjoyArizonaLiving.com</a></p>
        </div>
        <img className="family-img" src={img} alt="" />
    </div> </>);
}

export default Section2;