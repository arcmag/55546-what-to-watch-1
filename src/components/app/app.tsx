import * as React from 'react';
import {connect} from 'react-redux';
import {ActionsCreator as UserActionsCreator} from '../../reducer/user/user';
import {ActionsCreator as DataActionsCreator} from '../../reducer/data/data';
import {getFilms, getGenresList} from '../../reducer/data/selectors';
import {getGenre, getRequired} from '../../reducer/user/selectors';

import {Router, Switch, Route, Redirect} from 'react-router-dom';

import {FilmType} from '../../global-types';

import MainPage from '../main-page/main-page';
import Header from '../header/header';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';

import history from '../../history';

interface Props {
  films: FilmType[],
  genresList: string[],
  genre: string,
  getFilmsByGenre: (genre: string) => void,
  setActiveGenre: (genre: string) => void,
  isRequired: boolean,
}

class App extends React.Component<Props, null> {
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
            if (isRequired === null) {
              return null;
            }

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

const mapStateToProps = (state: any, ownProps: any) => Object.assign({}, ownProps, {
  isRequired: getRequired(state),
  genresList: getGenresList(state),
  films: getFilms(state),
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getFilmsByGenre: (genre: string) => {
    dispatch(DataActionsCreator.getFilmsByGenre(genre));
  },
  setActiveGenre: (genre: string) => {
    dispatch(UserActionsCreator.setGenre(genre));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
