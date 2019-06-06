import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './api';
import reducer from './reducer/index.js';
import {Operation} from './reducer/data/data';

const mainContainer = document.querySelector(`#root`);

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
  );

  store.dispatch(Operation.loadFilms());

  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      mainContainer
  );
};

init();
