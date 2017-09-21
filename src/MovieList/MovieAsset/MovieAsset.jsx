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
  asset: PropTypes.objectOf(PropTypes.shape({})).isRequired,
};

MovieAsset.defaultProps = {
  handleShowDetails: () => {},
};

export default MovieAsset;
