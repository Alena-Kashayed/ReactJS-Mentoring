import PropTypes from 'prop-types';
import React from 'react';
import styles from './InfoBar.scss';

function InfoBar(props) {
  return props.movieNumber ? (
    <div className={styles.infoBar}>{props.movieNumber} movies found</div>
  ) : null;
}

InfoBar.propTypes = {
  movieNumber: PropTypes.number.isRequired,
};

export default InfoBar;
