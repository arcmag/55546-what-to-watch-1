import React from 'react';
import propTypes from 'prop-types';

const MovieCard = (props) => {
  const {title, src} = props.data;
  const {onButtonPlayClick} = props;

  return <article className="small-movie-card catalog__movies-card">
    <button className="small-movie-card__play-btn" type="button" onClick={onButtonPlayClick}>Play</button>
    <div className="small-movie-card__image">
      <img src={src} alt="Macbeth" width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{title}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    src: propTypes.string.isRequired,
  }).isRequired,
  onButtonPlayClick: propTypes.func
};

export default MovieCard;
