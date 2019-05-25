import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const mock = {
  poster: `poster.jpg`,
  src: `video.mp4`,
  video: `video.mp4`,
};

describe(`Test GenreList`, () => {
  it(`renderer`, () => {
    const tree = renderer.create(<VideoPlayer
      poster={mock.poster}
      src={mock.src}
      video={mock.video}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

