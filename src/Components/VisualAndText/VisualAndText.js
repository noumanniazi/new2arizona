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
            {text.paragraphs.map(item => <><p>{item}</p></>)}
          </div>
          {hasImage ? <img className="family-img"  src={src} alt=""/> : <Video url={src} />}
        </>
      ) : (
          <>
            {hasImage ? <img className="family-img" src={src} alt="" /> : <Video url={src} />}
            <div>
              <h2>{text.heading}</h2>
              {text.paragraphs.map(item => <><p>{item}</p></>)}
            </div>
          </>
        )}
    </div >
  );
}

export default VisualAndText;