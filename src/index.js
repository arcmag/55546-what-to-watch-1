import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

import films from './mocks/films';

const mainContainer = document.querySelector(`#root`);

const init = () => {
  ReactDOM.render(
      <App films={films} />,
      mainContainer
  );
};

init();
