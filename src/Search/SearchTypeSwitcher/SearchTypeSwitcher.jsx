import classNames from 'classnames/bind';
import React from 'react';
import styles from './SearchTypeSwitcher.scss';

function SearchTypeSwitcher() {
  const cx = classNames.bind(styles);

  return (
    <div className={styles.SearchTypeSwitcher}>
      <div className={styles.searchByGroup}>
        <span className={styles.searchBy}>Search by</span>
        <button className={cx('searchByTitle', 'searchByBtn')}>
          Title
        </button>
        <button className={cx('searchByDirector', 'searchByBtn', 'active')}>
          Director
        </button>
      </div>
      <button className={cx('search', 'searchByBtn')}>
          Search
      </button>
    </div>
  );
}
export default SearchTypeSwitcher;
