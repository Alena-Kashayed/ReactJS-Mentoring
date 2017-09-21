import PropTypes from 'prop-types';
import React from 'react';
import styles from './InfoBar.scss';

const InfoBar = (props) => {
  const { movieDetails, moviesCount, onShowSearch } = props;
  return (
    onShowSearch ?
      <div className={styles.infoBar}>{moviesCount} movies found</div>
      : (
        <div className={styles.info}>
          <div>Films by {movieDetails.asset.director}</div>
        </div>
      )
  );
};

InfoBar.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  onShowSearch: PropTypes.bool.isRequired,
  movieDetails: PropTypes.shape({}),
};

InfoBar.defaultProps = {
  movieDetails: null,
};

export default InfoBar;
