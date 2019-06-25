import * as React from 'react';

import {FilmType} from '../../global-types';

import MovieCard from '../movie-card/movie-card';

interface Props {
  films: FilmType[],
  selectedGenre: string,
  setActiveItem: (item: any) => void,
}

const MoviesList: React.FunctionComponent<Props> = (props) => {
  const {films, setActiveItem} = props;

  return <div className="catalog__movies-list">
    {films
      .map((it: FilmType, idx: number) => <MovieCard
        key={idx}
        data={it}
        onCardClick={setActiveItem}
      />)}
  </div>;
};

export default MoviesList;
