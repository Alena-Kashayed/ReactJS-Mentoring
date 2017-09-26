import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SearchTypeSwitcher.scss';

const SearchTypeSwitcher = ({ type, handleChangeType }) => {
  const cx = classNames.bind(styles);

  const handleChangeSearchType = (e) => {
    handleChangeType(e.target.getAttribute('data-sortby'));
  };

  return (
    <div className={styles.SearchTypeSwitcher}>
      <div className={styles.searchByGroup}>
        <span className={styles.searchBy}>Search by</span>
        <button
          className={cx('searchByBtn', (type === 'title' ?
            'active' :
            ''))}
          onClick={handleChangeSearchType}
          data-sortby="title"
        >
          Title
        </button>
        <button
          className={cx('searchByBtn', (type === 'director' ?
            'active' :
            ''))}
          onClick={handleChangeSearchType}
          data-sortby="director"
        >
          Director
        </button>
      </div>
    </div>
  );
};

SearchTypeSwitcher.propTypes = {
  handleChangeType: PropTypes.func,
  type: PropTypes.string.isRequired,
};

SearchTypeSwitcher.defaultProps = {
  handleChangeType: () => {},
};

export default SearchTypeSwitcher;
