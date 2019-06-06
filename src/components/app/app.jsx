import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionsCreator} from '../../reducer';

import MainPage from '../main-page/main-page.jsx';

let genres = null;
class App extends React.Component {
  render() {
    const {films, getFilmsByGenre, setActiveGenre, genre} = this.props;

    if (!genres) {
      genres = [`All genres`, ...new Set(films.map((it) => it.genre))];
    }

    return <React.Fragment>
      <MainPage
        getFilmsByGenre={getFilmsByGenre}
        setActiveGenre={setActiveGenre}
        films={films}
        selectedGenre={genre}
        genres={genres}
      />
    </React.Fragment>;
  }
}

App.propTypes = {
  films: propTypes.array.isRequired,
  genre: propTypes.string.isRequired,
  getFilmsByGenre: propTypes.func.isRequired,
  setActiveGenre: propTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: state.films,
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  getFilmsByGenre: (genre) => {
    dispatch(ActionsCreator.getFilmsByGenre(genre));
  },
  setActiveGenre: (genre) => {
    dispatch(ActionsCreator.setGenre(genre));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
