import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './api';
import reducer from './reducer/index.js';
import {Operation} from './reducer/data/data';
import {Operation as UserOperation, ActionsCreator} from './reducer/user/user';

const mainContainer = document.querySelector(`#root`);

const init = (): void => {
  const api = createAPI((): void => {
    store.dispatch(ActionsCreator.setRequired(false));
  });

  const store: any = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
  );

  store.dispatch(Operation.loadFilms());
  store.dispatch(UserOperation.checkAuthorization());

  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      mainContainer
  );
};

init();
