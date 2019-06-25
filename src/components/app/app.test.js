import * as React from "react";
import * as renderer from "react-test-renderer";
import {App} from "./app";

const mock = {
  films: [
    {
      src: `test.jpg`,
      video: `test.mp4`,
      title: `Title film`
    },
    {
      src: `test.jpg`,
      video: `test.mp4`,
      title: `Title film`
    }
  ],
  genresList: [`fantasy`, `comedy`],
  genre: `fantasy`,
  isRequired: false,
};


it(`Test App`, () => {
  const tree = renderer.create(<App
    films={mock.films}
    genresList={mock.genresList}
    genre={mock.genre}
    getFilmsByGenre={jest.fn()}
    setActiveGenre={jest.fn()}
    selectedGenre={mock.genre}
    isRequired={mock.isRequired}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
