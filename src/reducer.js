import films from './mocks/films';

const initialState = {
  genre: ``,
  films
};

const ActionsCreator = {
  'GET_FILMS_BY_GENRE': (genre) => {
    let filmsList = initialState.films.map((it) => Object.assign({}, it));

    if (genre && genre !== `All genres`) {
      filmsList = filmsList.filter((it) => it.genre === genre);
    }

    return {
      type: `GET_FILMS_BY_GENRE`,
      payload: filmsList
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`: return Object.assign({}, state, {
      genre: action.payload
    });
    case `GET_FILMS_BY_GENRE`: return Object.assign({}, state, {
      films: action.payload
    });
  }

  return state;
};

export {reducer, ActionsCreator};
