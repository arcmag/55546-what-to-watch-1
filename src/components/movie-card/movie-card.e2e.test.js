import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from "enzyme";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Test button movie card`, () => {
  const testClickFn = jest.fn();
  const card = shallow(<MovieCard title={0} onButtonPlayClick={testClickFn} />);
  const btnStart = card.find(`.small-movie-card__play-btn`);
  expect(testClickFn).toHaveBeenCalledTimes(0);
  btnStart.simulate(`click`);
  expect(testClickFn).toHaveBeenCalledTimes(1);
});
