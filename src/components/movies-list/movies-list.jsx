import React from 'react';
import propTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

const ALL_GENRES = `All genres`;

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null
    };
  }

  _setActiveMovie(evt) {
    this.setState({
      activeMovie: evt.currentTarget.parentElement
    });
  }

  render() {
    const {films, setActiveItem} = this.props;

    return <div className="catalog__movies-list">
      {films
        .map((it, idx) => <MovieCard
          key={idx}
          data={it}
          WrapperMoviesList={this._setActiveMovie.bind(this)}
          onCardClick={setActiveItem}
        />)}
    </div>;
  }
}

MoviesList.propTypes = {
  films: propTypes.array.isRequired,
  selectedGenre: propTypes.string.isRequired,
  setActiveItem: propTypes.func.isRequired,
};

export default MoviesList;
