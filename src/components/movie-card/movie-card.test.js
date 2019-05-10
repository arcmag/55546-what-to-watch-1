import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const mockData = {
  src: `test.jpg`,
  title: `Title film`
};

it(`Test MoviesList`, () => {
  const tree = renderer.create(<MovieCard
    data={mockData}
    onButtonPlayClick={jest.fn()}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
