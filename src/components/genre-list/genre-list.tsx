import * as React from 'react';

interface Props {
  getFilmsByGenre: (genre: string) => void,
  setActiveGenre: (genre: string) => void,
  setActiveItem: (item: string) => void,
  activeItem?: string,
  genres: string[],
}

const GenreList: React.FunctionComponent<Props> = (props) => {
  const {
    getFilmsByGenre,
    genres,
    setActiveGenre,
    setActiveItem,
    activeItem,
  } = props;

  return <ul className="catalog__genres-list">
    {genres.map((it: string, idx: number) =>
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

export default GenreList;
