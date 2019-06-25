import * as React from 'react';
import * as renderer from 'react-test-renderer';

import GenreList from './genre-list';

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

