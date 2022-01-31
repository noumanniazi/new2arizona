import React from "react";
import PropTypes from 'prop-types';

import "./Video.scss";

const Video = ({ url, className }) => {
  return (
    <div className={`video ${className}`}>
      <iframe
        className="video-iframe"
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
};

Video.defaultProps = {
  className: ""
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
}


export default Video;
