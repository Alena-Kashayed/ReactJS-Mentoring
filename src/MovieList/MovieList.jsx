import PropTypes from 'prop-types';
import React from 'react';

import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';

const MovieList = ({ assets, handleShowDetails }) => {
  const handleShowMovieDetails = (movieDetails) => {
    handleShowDetails(movieDetails);
  };
  return (
    assets.length ?
      <div className={styles.movieList}>
        {assets.map(asset => (
          <MovieAsset
            key={asset.show_id}
            asset={asset}
            handleShowDetails={handleShowMovieDetails}
          />
        ))}
      </div> :
      <div className={styles.emptyPage}>No films found</div>
  );
};

MovieList.propTypes = {
  handleShowDetails: PropTypes.func,
  assets: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

MovieList.defaultProps = {
  handleShowDetails: () => {},
};

export default MovieList;
