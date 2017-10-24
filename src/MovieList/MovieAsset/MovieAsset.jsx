import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './MovieAsset.scss';
import { setCurrentFilm } from '../../actions';

const MovieAsset = ({ asset, dispatch }) => {
  const { id, title, release_date: releaseDate, poster_path: poster } = asset;
  const onSetCurrentFilm = () => {
    dispatch(setCurrentFilm(asset));
  };
  return (
    <div className={styles.movieAsset}>
      <Link to={`/film/${id}`} onClick={onSetCurrentFilm}>
        <div
          className={styles.poster}
          role="presentation"
        >
          <img
            className={styles.moviePoster}
            src={`https://image.tmdb.org/t/p/w300${poster}`}
            alt={title}
          />
        </div>
      </Link>
      <div className={styles.movieTitle}>
        <div>{title}</div>
        <div className={styles.movieYear}>{releaseDate.split('-')[0]}</div>
      </div>
    </div>
  );
};

MovieAsset.propTypes = {
  asset: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(MovieAsset);
