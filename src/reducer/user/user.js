const initialState = {
  genre: `All genres`,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
};

const ActionsCreator = {
  setGenre: (genre) => {
    return {
      type: ActionType.SET_GENRE,
      payload: genre
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE: return Object.assign({}, state, {
      genre: action.payload
    });
  }

  return state;
};
export {
  reducer,
  ActionsCreator,
  ActionType
};
