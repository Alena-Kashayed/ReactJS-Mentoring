import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieAsset.scss';

const MovieAsset = ({ asset, typeOfQuery }) => {
  const {
    id, title,
    release_date: releaseDate,
    first_air_date: firstAirDate,
    poster_path: poster,
  } = asset;

  const renderYear = date => (
    date ? <div className={styles.movieYear}>{date.split('-')[0]}</div> : null
  );

  return (
    <div className={styles.movieAsset}>
      <Link to={`/film/${typeOfQuery}/${id}`}>
        <div
          className={styles.poster}
          role="presentation"
        >
          <img
            className={styles.moviePoster}
            src={
              poster
                ? `https://image.tmdb.org/t/p/w300${poster}`
                : ''
            }
            alt={title}
          />
        </div>
      </Link>
      <div className={styles.movieTitle}>
        <div>{title}</div>
        {renderYear(releaseDate)}
        {renderYear(firstAirDate)}
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
  typeOfQuery: PropTypes.string.isRequired,
};

export default MovieAsset;
