const MAX_COUNT_GENRES_FILMS = 7;

const initialState = {
  genresList: [],
  films: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SET_GENRES_LIST: `SET_GENRES_LIST`,
};

const filmsDataAdapter = (films) => films.map((it) => {
  return {
    backgroundColor: it.background_color,
    backgroundImage: it.background_image,
    description: it.description,
    director: it.director,
    genre: it.genre,
    id: it.id,
    isFavorite: it.is_favorite,
    name: it.name,
    posterImage: it.poster_image,
    previewImage: it.preview_image,
    previewVideoLink: it.preview_video_link,
    rating: it.rating,
    released: it.released,
    runTime: it.run_time,
    scoresCount: it.scores_count,
    starring: it.starring,
    videoLink: it.video_link,
  };
});

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
  loadFilms: (films = []) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  setGenresList: (genresList = []) => {
    return {
      type: ActionType.SET_GENRES_LIST,
      payload: [`All genres`, ...new Set(genresList.map((it) => it.genre))].splice(0, MAX_COUNT_GENRES_FILMS)
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = filmsDataAdapter(response.data || []);
        initialState.films = films;
        dispatch(ActionsCreator.loadFilms(films));
        dispatch(ActionsCreator.setGenresList(films));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS_BY_GENRE: return Object.assign({}, state, {
      films: action.payload
    });
    case ActionType.SET_GENRES_LIST: return Object.assign({}, state, {
      genresList: action.payload
    });
    case ActionType.LOAD_FILMS: return Object.assign({}, state, {
      films: action.payload
    });
  }

  return state;
};

export {reducer, Operation, ActionsCreator, ActionType};
