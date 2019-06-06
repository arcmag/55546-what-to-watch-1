import React from 'react';
import propTypes from 'prop-types';

const GenreList = (props) => {
  const {
    getFilmsByGenre,
    genres,
    setActiveGenre,
    setActiveItem,
    activeItem,
  } = props;

  return <ul className="catalog__genres-list">
    {genres.map((it, idx) =>
      <li
        key={idx}
        className={`catalog__genres-item ${it === activeItem ? `catalog__genres-item--active` : ``}`}
      >
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          getFilmsByGenre(it);
          setActiveGenre(it);
          setActiveItem(it);
        }}>{it}</a>
      </li>
    )}
  </ul>;
};

GenreList.propTypes = {
  getFilmsByGenre: propTypes.func.isRequired,
  genres: propTypes.array.isRequired,
  setActiveGenre: propTypes.func.isRequired,
  setActiveItem: propTypes.func.isRequired,
  activeItem: propTypes.any,
};

export default GenreList;
