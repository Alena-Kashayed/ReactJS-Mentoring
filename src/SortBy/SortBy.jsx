import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './SortBy.scss';

const SortBy = (props) => {
  const { onShowSearch } = props;
  const cx = classNames.bind(styles);
  return onShowSearch ? (
    <div className={styles.sortByGroup}>
      <span className={styles.sortBy}>Sort by</span>
      <button className={cx('releaseDay', 'sortByBtn')}>release day</button>
      <button className={cx('rating', 'sortByBtn', 'active')}>rating</button>
    </div>
  ) : null;
};

SortBy.propTypes = {
  onShowSearch: PropTypes.bool.isRequired,
};

export default SortBy;
