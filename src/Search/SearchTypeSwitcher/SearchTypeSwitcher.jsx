import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SearchTypeSwitcher.scss';

const cx = classNames.bind(styles);

const SearchTypeSwitcher = ({ typeOfQuery, handleChangeType }) => {
  const handleChangeSearchType = newType => () => handleChangeType(newType);

  return (
    <div className={styles.SearchTypeSwitcher}>
      <div className={styles.searchByGroup}>
        <span className={styles.searchBy}>Search by</span>
        <button
          className={cx('searchByBtn', { active: typeOfQuery === 'movie' })}
          onClick={handleChangeSearchType('movie')}
        >
          Movie
        </button>
        <button
          className={cx('searchByBtn', { active: typeOfQuery === 'tv' })}
          onClick={handleChangeSearchType('tv')}
        >
          TV show
        </button>
      </div>
    </div>
  );
};

SearchTypeSwitcher.propTypes = {
  handleChangeType: PropTypes.func,
  typeOfQuery: PropTypes.string.isRequired,
};

SearchTypeSwitcher.defaultProps = {
  handleChangeType: () => {},
};

export default SearchTypeSwitcher;
