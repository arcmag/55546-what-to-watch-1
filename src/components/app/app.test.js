import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

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
  genres: [`fantasy`, `comedy`],
  genre: `fantasy`,
};

it(`Test App`, () => {
  const tree = renderer.create(<App
    films={mock.films}
    genres={mock.genres}
    genre={mock.genre}
    getFilmsByGenre={jest.fn()}
    setActiveGenre={jest.fn()}
    selectedGenre={mock.genre}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
