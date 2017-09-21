import PropTypes from 'prop-types';
import React from 'react';
import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';

const MovieList = (props) => {
  const { assets, handleShowDetails } = props;
  const handleShowMovieDetails = (movieDetails) => {
    handleShowDetails(movieDetails);
  };
  return (
    <div className={styles.movieList}>
      {assets.map(asset => (
        <MovieAsset
          key={asset.show_id}
          asset={asset}
          handleShowDetails={handleShowMovieDetails}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  handleShowDetails: PropTypes.func,
  assets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

MovieList.defaultProps = {
  handleShowDetails: () => {},
};

export default MovieList;
