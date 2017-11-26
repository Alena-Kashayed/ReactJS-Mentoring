import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './InfoBar.scss';

const movieDetails = {
  director: 'Quentin Tarantino',
};

const InfoBar = ({ currentFilm, assets }) => {
  const moviesCount = Object.keys(assets).length;
  return !(Object.keys(currentFilm).length) ?
    <div className={styles.infoBar}>{moviesCount} movies found</div> :
    (
      <div className={styles.infoBar}>
        <div>Films by {movieDetails.director}</div>
      </div>
    );
};

InfoBar.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.bool,
      backdrop_path: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number,
      original_language: PropTypes.string,
      original_title: PropTypes.string,
      overview: PropTypes.string,
      popularity: PropTypes.number,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      title: PropTypes.string,
      video: PropTypes.bool,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
    }).isRequired,
  ).isRequired,
  currentFilm: PropTypes.shape({
    category: PropTypes.string,
    director: PropTypes.string,
    mediatype: PropTypes.number,
    poster: PropTypes.string,
    rating: PropTypes.string,
    release_year: PropTypes.string,
    runtime: PropTypes.number,
    show_cast: PropTypes.string,
    show_id: PropTypes.number,
    show_title: PropTypes.string,
    summary: PropTypes.string,
    unit: PropTypes.number,
  }),
};

InfoBar.defaultProps = {
  currentFilm: {},
};

const mapStateToProps = state => ({
  assets: state.films.results,
  currentFilm: state.currentFilm,
});

export default connect(mapStateToProps)(InfoBar);
