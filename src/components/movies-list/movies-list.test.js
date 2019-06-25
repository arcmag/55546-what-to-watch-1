import * as React from "react";
import * as renderer from "react-test-renderer";
import MoviesList from "./movies-list";

const mockFilms = [
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
];

it(`Test MoviesList`, () => {
  const tree = renderer.create(<MoviesList films={mockFilms} />).toJSON();
  expect(tree).toMatchSnapshot();
});
