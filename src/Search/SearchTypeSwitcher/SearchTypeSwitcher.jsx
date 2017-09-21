import classNames from 'classnames/bind';
import React from 'react';
import styles from './SearchTypeSwitcher.scss';

function SearchTypeSwitcher() {
  const cx = classNames.bind(styles);
  // let searchBy = 'Title';

  const handleChangeSearchType = (e) => {
    const searchByBtns = e.target.parentNode.querySelectorAll('button');
    // searchBy = e.target.textContent;
    searchByBtns.forEach((searchByBtn) => {
      searchByBtn.classList.toggle('active');
    });
  };

  return (
    <div className={styles.SearchTypeSwitcher}>
      <div className={styles.searchByGroup}>
        <span className={styles.searchBy}>Search by</span>
        <button
          className={cx('searchByTitle', 'searchByBtn')}
          onClick={handleChangeSearchType}
        >
          Title
        </button>
        <button
          className={cx('searchByDirector', 'searchByBtn', 'active')}
          onClick={handleChangeSearchType}
        >
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
