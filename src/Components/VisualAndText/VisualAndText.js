import React from 'react';

import Video from '../Video';
import './VisualAndText.scss';

const VisualAndText = (props) => {
  const { src, text, textFirst, hasImage } = props;
  return (
    <div className={`website-width visual-and-text`}>
      {textFirst ? (
        <>
          <div>
            <h2>{text.heading}</h2>
            {text.paragraphs.map((item, index) => <p key={`section1-para-${index}`}>{item}</p>)}
          </div>
          {hasImage ? <img className="family-img"  src={src} alt=""/> : <Video url={src} />}
        </>
      ) : (
          <>
            {hasImage ? <img className="family-img" src={src} alt="" /> : <Video url={src} />}
            <div>
              <h2>{text.heading}</h2>
              {text.paragraphs.map((item, index) => <p key={`section1-para-${index}`}>{item}</p>)}
            </div>
          </>
        )}
    </div >
  );
}

export default VisualAndText;