import films from './mocks/films';

const initialState = {
  genre: ``,
  films
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const ActionsCreator = {
  getFilmsByGenre: (genre) => {
    let filmsList = initialState.films.map((it) => Object.assign({}, it));

    if (genre && genre !== `All genres`) {
      filmsList = filmsList.filter((it) => it.genre === genre);
    }

    return {
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: filmsList
    };
  },
  setGenre: (genre) => {
    let filmsList = initialState.films.map((it) => Object.assign({}, it));

    if (genre && genre !== `All genres`) {
      filmsList = filmsList.filter((it) => it.genre === genre);
    }

    return {
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: filmsList
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE: return Object.assign({}, state, {
      genre: action.payload
    });
    case ActionType.GET_FILMS_BY_GENRE: return Object.assign({}, state, {
      films: action.payload
    });
  }

  return state;
};

export {reducer, ActionsCreator};
