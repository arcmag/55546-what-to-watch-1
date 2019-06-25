import * as React from "react";
import * as renderer from "react-test-renderer";
import MainPage from "./main-page";

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

it(`Test MainPage`, () => {
  const tree = renderer.create(<MainPage
    films={mock.films}
    genres={mock.genres}
    genre={mock.genre}
    getFilmsByGenre={jest.fn()}
    setActiveGenre={jest.fn()}
    selectedGenre={mock.genre}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
