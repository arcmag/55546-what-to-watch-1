import React from 'react';
import propTypes from 'prop-types';

import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {films} = props;

  return <React.Fragment>
    <MainPage films={films} />
  </React.Fragment>;
};

App.propTypes = {
  films: propTypes.array.isRequired
};

export default App;
