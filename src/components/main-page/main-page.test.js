import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";

const mockFilms = [
  {
    src: `test.jpg`,
    title: `Title film`
  },
  {
    src: `test.jpg`,
    title: `Title film`
  }
];

it(`Test MainPage`, () => {
  const tree = renderer.create(<MainPage films={mockFilms} />).toJSON();
  expect(tree).toMatchSnapshot();
});
