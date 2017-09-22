import React, { Component } from 'react';
import styles from './Search.scss';
import SearchTypeSwitcher from './SearchTypeSwitcher/SearchTypeSwitcher';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  handleSearchType = (searchType) => {
    console.log(`${searchType}=${this.state.search}`);
  };
  handleChangeSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    return (
      <section className={styles.searchWrapper}>
        <div className={styles.search}>
          <div className={styles.content}>
            <div className={styles.logo}>Netflixtrullete</div>
            <label className={styles.searchLabel} htmlFor="search">
              Find your movie
            </label>
            <input
              name="search"
              className={styles.searchInput}
              type="text"
              placeholder="Quentin Tarantino"
              value={this.state.value}
              onChange={this.handleChangeSearch}
            />
            <SearchTypeSwitcher
              handleSearchType={this.handleSearchType}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
