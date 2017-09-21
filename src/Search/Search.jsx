import React from 'react';
import styles from './Search.scss';
import SearchTypeSwitcher from './SearchTypeSwitcher/SearchTypeSwitcher';

const Search = () => (
  <section className={styles.searchWrapper}>
    <div className={styles.search}>
      <div className={styles.content}>
        <div className={styles.logo}>Netflixtrullete</div>
        <label className={styles.searchLabel} htmlFor="search">
          Find your movie
        </label>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Quentin Tarantino"
        />
        <SearchTypeSwitcher />
      </div>
    </div>
  </section>
);

export default Search;
