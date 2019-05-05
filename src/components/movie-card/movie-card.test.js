import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

it(`Test MovieCard`, () => {
  const tree = renderer
    .create(<MovieCard title={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
