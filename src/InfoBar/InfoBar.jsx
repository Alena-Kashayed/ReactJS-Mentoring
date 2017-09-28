import React from 'react';

import styles from './InfoBar.scss';

const movieDetails = {
  director: 'Quentin Tarantino',
};
const moviesCount = 7;

const InfoBar = () => (
  !(movieDetails) ?
    <div className={styles.infoBar}>{moviesCount} movies found</div> :
    (
      <div className={styles.infoBar}>
        <div>Films by {movieDetails.director}</div>
      </div>
    )
);

export default InfoBar;
