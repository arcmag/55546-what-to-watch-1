import * as React from 'react';
import {FilmType} from '../../global-types';

import VideoPlayer from '../video-player/video-player';

const PLAY_DELAY = 1000;

interface Props {
  data: FilmType,
  onCardClick?: (item: FilmType) => void,
}

interface State {
  timerActivated: any,
  isActivated: boolean,
}

class MovieCard extends React.PureComponent<Props, State> {
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
    const {
      previewImage,
      posterImage,
      previewVideoLink,
      name,
    } = this.props.data;
    const {onCardClick} = this.props;

    return <article
      onClick={() => {
        onCardClick(this.props.data);
      }}
      className="small-movie-card catalog__movies-card"
    >
      <div
        className="small-movie-card__image"
        onMouseOver={this._onImgMouseOver}
        onMouseOut={this._onImgMouseOut}
      >
        {this.state.isActivated ?
          <VideoPlayer poster={posterImage} src={previewVideoLink} /> :
          <img src={previewImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>;
  }
}

export default MovieCard;
