import React from 'react';
import propTypes from 'prop-types';

const VideoPlayer = (props) => {
  return <video
    width="280"
    height="175"
    autoPlay={true}
    muted={true}
    poster={props.src}
    src={props.video}
  ></video>;
};

VideoPlayer.propTypes = {
  video: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
};

export default VideoPlayer;