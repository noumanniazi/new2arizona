import React from 'react';

import Video from '../Video';
import './VisualAndText.scss';

const VisualAndText = (props) => {
  const { src, text, textFirst, hasImage, bullets } = props;
  return (
    <div className={`website-width visual-and-text`}>
      {textFirst ? (
        <>
          <div>
            <h2>{text.heading}</h2>
            {text.paragraphs.map((item, index) => <p className="section-paragraph" key={`section1-para-${index}`}>{item}</p>)}
          </div>
          {bullets ? <ul>
            {
              text.paragraphs.map((item, index) => <li className="section-paragraph" key={`section1-para-${index}`}>{item}</li>)
            }
          </ul> :
            text.paragraphs.map((item, index) => <p className="section-paragraph" key={`section1-para-${index}`}>{item}</p>)
          }
        </>
      ) : (
          <>
            {hasImage ? <img className="section-img" src={src} alt="" /> : <Video url={src} />}
            <div>
              <h2>{text.heading}</h2>
              {bullets ? <ul>
                {
                  text.paragraphs.map((item, index) => <li className="section-paragraph" key={`section1-para-${index}`}>{item}</li>)
                }
              </ul> :
                text.paragraphs.map((item, index) => <p className="section-paragraph" key={`section1-para-${index}`}>{item}</p>)
              }
            </div>
          </>
        )}
    </div >
  );
}

export default VisualAndText;