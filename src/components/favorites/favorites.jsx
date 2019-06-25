import React from 'react';
import {connect} from 'react-redux';
import {getFavoriteFilms} from '../../reducer/data/selectors';
import {Operation} from '../../reducer/data/data';
import MovieCard from '../movie-card/movie-card.jsx';

class Favorites extends React.PureComponent {
  constructor(props) {
    super(props);
    props.loadFavoriteFilms();
  }

  render() {
    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {(this.props.favoriteFilms || []).map((it, idx) => <MovieCard
            key={idx}
            data={it}
          />)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>;
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favoriteFilms: getFavoriteFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms: () => {
    dispatch(Operation.loadFavoriteFilms());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
