const initialState = {
  isRequired: null,
  genre: `All genres`,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_REQUIRED: `SET_REQUIRED`,
};

const ActionsCreator = {
  setGenre: (genre) => {
    return {
      type: ActionType.SET_GENRE,
      payload: genre
    };
  },
  SET_REQUIRED: (status) => {
    return {
      type: ActionType.SET_REQUIRED,
      payload: status
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE: return Object.assign({}, state, {
      genre: action.payload
    });
    case ActionType.SET_REQUIRED: return Object.assign({}, state, {
      isRequired: action.payload
    });
  }

  return state;
};
export {
  reducer,
  ActionsCreator,
  ActionType
};
