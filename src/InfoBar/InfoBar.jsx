import PropTypes from 'prop-types';
import React from 'react';

import styles from './InfoBar.scss';

const InfoBar = ({ movieDetails, moviesCount }) => (
  !(movieDetails) ?
    <div className={styles.infoBar}>{moviesCount} movies found</div> :
    (
      <div className={styles.infoBar}>
        <div>Films by {movieDetails.director}</div>
      </div>
    )
);

InfoBar.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  movieDetails: PropTypes.shape({
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
  }),
};

InfoBar.defaultProps = {
  movieDetails: null,
};

export default InfoBar;
