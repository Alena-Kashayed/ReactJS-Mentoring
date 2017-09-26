import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SortBy.scss';

const SortBy = ({ movieDetails }) => {
  const cx = classNames.bind(styles);
  return !(movieDetails) ? (
    <div className={styles.sortByGroup}>
      <span className={styles.sortBy}>Sort by</span>
      <button className={cx('releaseDay', 'sortByBtn')}>release day</button>
      <button className={cx('rating', 'sortByBtn', 'active')}>rating</button>
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
};

SortBy.defaultProps = {
  movieDetails: null,
};

export default SortBy;
