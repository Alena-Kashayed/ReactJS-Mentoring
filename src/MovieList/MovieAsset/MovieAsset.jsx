import PropTypes from 'prop-types';
import React from 'react';
import styles from './MovieAsset.scss';

const MovieAsset = (props) => {
  const { handleShowDetails } = props;
  const { poster, show_title: showTitle, release_year: releaseYear, category } = props.asset;
  const handleShowMovieDetails = () => {
    handleShowDetails(props);
  };

  return (
    <div className={styles.movieAsset}>
      <button
        type="button"
        onClick={handleShowMovieDetails}
      >
        <img
          className={styles.moviePoster}
          src={poster}
          alt={showTitle}
        />
      </button>
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
