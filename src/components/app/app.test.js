import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Test App`, () => {
  const tree = renderer.create(<App films={mockFilms} />).toJSON();
  expect(tree).toMatchSnapshot();
});
