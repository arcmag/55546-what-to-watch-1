import {reducer} from './reducer';

describe(`Test reducer`, () => {
  it(`set genre`, () => {
    expect(reducer({
      genre: ``
    }, {
      type: `SET_GENRE`,
      payload: `fantasy`,
    })).toEqual({genre: `fantasy`});
  });
});
