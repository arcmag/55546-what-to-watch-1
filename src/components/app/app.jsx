import React from 'react';
import propTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

const movieCardTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Macbeth 2`];

const App = () => {
  App.propTypes = {
    movieCardTitles: propTypes.array
  };

  return <div>
    <h1>React Application</h1>
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {movieCardTitles.map((it, idx) => <MovieCard key = {idx} title = {it} />)}
    </section>
  </div>;
};

export default App;
