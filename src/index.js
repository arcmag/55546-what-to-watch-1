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
import {BrowserRouter} from 'react-router-dom';

const mainContainer = document.querySelector(`#root`);

const init = () => {
  // const api = createAPI((...args) => store.dispatch(...args));
  const api = createAPI(() => {
    console.log(1);
  });

  const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
  );

  store.dispatch(Operation.loadFilms());

  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      mainContainer
  );
};

init();
