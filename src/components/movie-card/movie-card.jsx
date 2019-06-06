import React from 'react';
import propTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

const PLAY_DELAY = 1000;

class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      timerActivated: null,
      isActivated: false,
    };

    this._onImgMouseOver = this._onImgMouseOver.bind(this);
    this._onImgMouseOut = this._onImgMouseOut.bind(this);
  }

  _onImgMouseOver() {
    this.setState({
      timerActivated: setTimeout(() => {
        this.setState({isActivated: true});
      }, PLAY_DELAY)
    });
  }

  _onImgMouseOut() {
    if (this.state.timerActivated) {
      clearTimeout(this.state.timerActivated);
    }

    this.setState({
      timerActivated: null,
      isActivated: false
    });
  }

  render() {
    const {title, src, video} = this.props.data;
    const {onCardClick} = this.props;

    return <article
      onClick={() => {
        onCardClick(this.props.data);
        console.log(this.props.data);
      }}
      className="small-movie-card catalog__movies-card"
    >
      <div
        className="small-movie-card__image"
        onMouseOver={this._onImgMouseOver}
        onMouseOut={this._onImgMouseOut}
      >
        {
          this.state.isActivated ?
            <VideoPlayer src={src} video={video} /> :
            <img src={src} alt={title} width="280" height="175" />
        }
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>;
  }
}

MovieCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    video: propTypes.string.isRequired,
    src: propTypes.string.isRequired,
  }).isRequired,
  onCardClick: propTypes.func.isRequired
};

export default MovieCard;
