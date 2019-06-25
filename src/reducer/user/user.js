const initialState = {
  isRequired: null,
  genre: `All genres`,
  user: {},
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_REQUIRED: `SET_REQUIRED`,
  SIGN_IN: `SIGN_IN`,
};

const Operation = {
  checkAuthorization: () => (dispatch, _getSate, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.data) {
          dispatch(ActionsCreator.signIn(response.data));
          dispatch(ActionsCreator.setRequired(true));
        }
      });
  },
  signIn: (data) => (dispatch, _getSate, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        dispatch(ActionsCreator.signIn(response.data));
        dispatch(ActionsCreator.setRequired(true));
      });
  }
};

const ActionsCreator = {
  setGenre: (genre) => {
    return {
      type: ActionType.SET_GENRE,
      payload: genre
    };
  },
  setRequired: (status) => {
    return {
      type: ActionType.SET_REQUIRED,
      payload: status
    };
  },
  signIn: (user) => {
    return {
      type: ActionType.SIGN_IN,
      payload: user
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE: return Object.assign({}, state, {
      genre: action.payload
    });
    case ActionType.SET_REQUIRED: return Object.assign({}, state, {
      isRequired: action.payload
    });
    case ActionType.SIGN_IN: return Object.assign({}, state, {
      user: action.payload
    });
  }

  return state;
};
export {
  reducer,
  ActionsCreator,
  ActionType,
  Operation
};
