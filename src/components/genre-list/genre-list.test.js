import React from 'react';
import renderer from 'react-test-renderer';

import GenreList from './genre-list.jsx';

const mock = {
  genres: [`fantasy`, `comedy`],
  genre: `fantasy`,
};

describe(`Test GenreList`, () => {
  it(`renderer`, () => {
    const tree = renderer.create(<GenreList
      setActiveGenre={jest.fn()}
      getFilmsByGenre={jest.fn()}
      selectedGenre={mock.genre}
      genres={mock.genres}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

