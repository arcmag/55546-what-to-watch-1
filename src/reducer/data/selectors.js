import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getGenresList = (state) => {
  return state[NAME_SPACE].genresList;
};
