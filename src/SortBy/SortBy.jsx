import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styles from './SortBy.scss';
import { setSortBy } from '../actions';

const SortBy = ({ movieDetails, sortBy, dispatch }) => {
  const cx = classNames.bind(styles);
  const handleSortBy = (value) => {
    dispatch(setSortBy(value));
  };
  return !(movieDetails) ? (
    <div className={styles.sortByGroup}>
      <span className={styles.sortBy}>Sort by</span>
      <button
        onClick={() => handleSortBy('releaseDay')}
        className={cx('releaseDay', 'sortByBtn', { active: sortBy === 'releaseDay' })}
      >
        release day
      </button>
      <button
        onClick={() => handleSortBy('rating')}
        className={cx('rating', 'sortByBtn', { active: sortBy === 'rating' })}
      >
        rating
      </button>
    </div>
  ) : null;
};

SortBy.propTypes = {
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
  dispatch: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
};

SortBy.defaultProps = {
  movieDetails: null,
  sortBy: '',
};

const mapStateToProps = state => ({
  sortBy: state.sortBy.value,
});

export default connect(mapStateToProps)(SortBy);
