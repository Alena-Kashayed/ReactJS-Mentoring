import PropTypes from 'prop-types';
import React from 'react';
import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';

function MovieList(props) {
  const showDetails = (movieDetails) => {
    props.showDetails(movieDetails);
  };
  return (
    <div className={styles.movieList}>
      {props.assets.map(asset => (
        <MovieAsset
          key={asset.show_id}
          url={asset.poster}
          name={asset.show_title}
          year={asset.release_year}
          genre={asset.category}
          description={asset.summary}
          director={asset.director}
          cast={asset.show_cast}
          rating={asset.rating}
          runtime={asset.runtime}
          showDetails={showDetails}
        />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  showDetails: PropTypes.func.isRequired,
  assets: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MovieList;
