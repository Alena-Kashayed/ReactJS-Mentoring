import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SearchTypeSwitcher.scss';

const cx = classNames.bind(styles);

const SearchTypeSwitcher = ({ type, handleChangeType }) => {
  const handleChangeSearchType = newType => () => handleChangeType(newType);

  return (
    <div className={styles.SearchTypeSwitcher}>
      <div className={styles.searchByGroup}>
        <span className={styles.searchBy}>Search by</span>
        <button
          className={cx('searchByBtn', { active: type === 'title' })}
          onClick={handleChangeSearchType('title')}
        >
          Title
        </button>
        <button
          className={cx('searchByBtn', { active: type === 'director' })}
          onClick={handleChangeSearchType('director')}
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
