import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieAsset.scss';

const MovieAsset = ({ handleShowDetails, asset }) => {
  const { poster, show_title: showTitle, release_year: releaseYear, category } = asset;
  const handleShowMovieDetails = () => {
    handleShowDetails(asset);
  };

  return (
    <div className={styles.movieAsset}>
      <Link to={`/film/${showTitle}`}>
        <div
          className={styles.poster}
          onClick={handleShowMovieDetails}
          role="presentation"
        >
          <img
            className={styles.moviePoster}
            src={poster}
            alt={showTitle}
          />
        </div>
      </Link>
      <div className={styles.movieTitle}>
        <div>{showTitle}</div>
        <div className={styles.movieYear}>{releaseYear}</div>
      </div>
      <div className={styles.movieGenre}>{category}</div>
    </div>
  );
};

MovieAsset.propTypes = {
  handleShowDetails: PropTypes.func,
  asset: PropTypes.shape({
    category: PropTypes.string,
    director: PropTypes.string,
    mediatype: PropTypes.number,
    poster: PropTypes.string,
    rating: PropTypes.string,
    release_year: PropTypes.string,
    runtime: PropTypes.string,
    show_cast: PropTypes.string,
    show_id: PropTypes.number,
    show_title: PropTypes.string,
    summary: PropTypes.string,
    unit: PropTypes.number,
  }).isRequired,
};

MovieAsset.defaultProps = {
  handleShowDetails: () => {},
};

export default MovieAsset;
