import React from 'react';
import propTypes from 'prop-types';

const GenreList = (props) => {
  const {getFilmsByGenre, genres, selectedGenre, setActiveGenre} = props;

  return <ul className="catalog__genres-list">
    {genres.map((it, idx) =>
      <li
        key={idx}
        className={`catalog__genres-item ${it === selectedGenre ? `catalog__genres-item--active` : ``}`}
      >
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          getFilmsByGenre(evt.target.textContent);
          setActiveGenre(evt.target.textContent);
        }}>{it}</a>
      </li>
    )}
  </ul>;
};

GenreList.propTypes = {
  getFilmsByGenre: propTypes.func.isRequired,
  genres: propTypes.array.isRequired,
  selectedGenre: propTypes.string.isRequired,
  setActiveGenre: propTypes.func.isRequired,
};

export default GenreList;
