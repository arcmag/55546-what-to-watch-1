import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionsCreator as UserActionsCreator} from '../../reducer/user/user';
import {ActionsCreator as DataActionsCreator} from '../../reducer/data/data';
import {getFilms, getGenresList} from '../../reducer/data/selectors';
import {getGenre, getRequired} from '../../reducer/user/selectors';

import {Router, Switch, Route, Redirect} from 'react-router-dom';

import MainPage from '../main-page/main-page.jsx';
import Header from '../header/header.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';

import history from '../../history.js';

class App extends React.Component {
  render() {
    const {
      films,
      getFilmsByGenre,
      setActiveGenre,
      genre,
      genresList,
      isRequired,
    } = this.props;

    return <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => {
            return <MainPage
              getFilmsByGenre={getFilmsByGenre}
              setActiveGenre={setActiveGenre}
              films={films}
              selectedGenre={genre}
              genres={genresList}
            />;
          }}/>

          <Route path="/favorites" render={() => {
            if (!isRequired) {
              return <Redirect to="/" />;
            }

            return <Favorites />;
          }} />

          <Route exact path="/login" render={() => {
            if (isRequired === null) {
              return null;
            }

            if (isRequired) {
              return <Redirect to="/" />;
            }

            return <SignIn />;
          }} />

        </Switch>
      </Router>
    </>;
  }
}

App.propTypes = {
  films: propTypes.array.isRequired,
  genresList: propTypes.array.isRequired,
  genre: propTypes.string.isRequired,
  getFilmsByGenre: propTypes.func.isRequired,
  setActiveGenre: propTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isRequired: getRequired(state),
  genresList: getGenresList(state),
  films: getFilms(state),
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFilmsByGenre: (genre) => {
    dispatch(DataActionsCreator.getFilmsByGenre(genre));
  },
  setActiveGenre: (genre) => {
    dispatch(UserActionsCreator.setGenre(genre));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
