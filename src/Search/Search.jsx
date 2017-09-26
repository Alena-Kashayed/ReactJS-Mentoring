import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Search.scss';
import SearchTypeSwitcher from './SearchTypeSwitcher/SearchTypeSwitcher';

class Search extends Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(props.location.search);
    const directorSearch = params.get('director') ? params.get('director') : '';
    const search = params.get('title') ? params.get('title') : directorSearch;
    const directorSearchBy = params.get('director') ? 'director' : '';
    const searchBy = params.get('title') ? 'title' : directorSearchBy;
    this.state = {
      searchBy,
      search,
    };
  }
  handleChangeSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    return (
      <div>
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
                value={this.state.search}
                onChange={this.handleChangeSearch}
              />
              <SearchTypeSwitcher
                searchBy={this.state.searchBy}
                search={this.state.search}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Search.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.strings,
  }).isRequired,
};

export default Search;
