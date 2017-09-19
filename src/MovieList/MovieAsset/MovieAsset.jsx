import PropTypes from 'prop-types';
import React from 'react';
import styles from './MovieAsset.scss';

function MovieAsset(props) {
  const showDetails = () => {
    props.showDetails(props);
  };

  return (
    <div className={styles.movieAsset}>
      <button
        type="button"
        onClick={showDetails}
      >
        <img
          className={styles.moviePoster}
          src={props.url}
          alt={props.name}
        />
      </button>
      <div className={styles.movieTitle}>
        <div>{props.name}</div>
        <div className={styles.movieYear}>{props.year}</div>
      </div>
      <div className={styles.movieGenre}>{props.genre}</div>
    </div>
  );
}

MovieAsset.propTypes = {
  showDetails: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MovieAsset;
