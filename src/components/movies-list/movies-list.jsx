import React from 'react';
import propTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

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
    const {films} = this.props;

    return <div className="catalog__movies-list">
      {films.map((it, idx) => <MovieCard
        key={idx}
        data={it}
        onButtonPlayClick={this._setActiveMovie.bind(this)}
      />)}
    </div>;
  }
}

MoviesList.propTypes = {
  films: propTypes.array.isRequired
};

export default MoviesList;
