import * as React from 'react';

interface Props {
  poster: string,
  src: string,
};

const VideoPlayer: React.FunctionComponent<Props> = (props) => {
  return <video
    width="280"
    height="175"
    autoPlay={true}
    muted={true}
    poster={props.poster}
    src={props.src}
  ></video>;
};

export default VideoPlayer;
