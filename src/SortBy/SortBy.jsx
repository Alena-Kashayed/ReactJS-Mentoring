import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styles from './SortBy.scss';
import { setSortByReleaseDay, setSortByRating } from '../actions';

const cx = classNames.bind(styles);
const handleSortByReleaseDay = (dispatch) => {
  dispatch(setSortByReleaseDay);
};
const handleSortByRating = (dispatch) => {
  dispatch(setSortByRating);
};

const SortBy = ({ currentFilm, sortBy, dispatch }) => (
  !(Object.keys(currentFilm).length) ?
    (
      <div className={styles.sortByGroup}>
        <span className={styles.sortBy}>Sort by</span>
        <button
          onClick={() => handleSortByReleaseDay(dispatch)}
          className={cx('releaseDay', 'sortByBtn', { active: sortBy === 'releaseDay' })}
        >
          release day
        </button>
        <button
          onClick={() => handleSortByRating(dispatch)}
          className={cx('rating', 'sortByBtn', { active: sortBy === 'rating' })}
        >
          rating
        </button>
      </div>
    ) :
    null
);

SortBy.propTypes = {
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
  dispatch: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
};

SortBy.defaultProps = {
  currentFilm: null,
  sortBy: '',
};

const mapStateToProps = state => ({
  sortBy: state.sortBy.value,
  currentFilm: state.currentFilm,
});

export default connect(mapStateToProps)(SortBy);
