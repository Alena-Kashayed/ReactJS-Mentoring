import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Search.scss';
import SearchTypeSwitcher from './SearchTypeSwitcher/SearchTypeSwitcher';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      typeOfQuery: '',
    };
  }
  componentDidMount() {
    const { pathname, search } = this.props.location;
    const params = new URLSearchParams(search);
    this.setState({
      query: params.get('query') || '',
      typeOfQuery: pathname.split('/')[2] || 'movie',
    });
  }
  handleChangeSearch = (e) => {
    this.setState({
      query: e.target.value,
    });
  };
  handleChangeType = (typeOfQuery) => {
    this.setState({
      typeOfQuery,
    });
  };
  render() {
    const { query, typeOfQuery } = this.state;
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
                value={query}
                onChange={this.handleChangeSearch}
              />
              <div className={styles.switcherGroup}>
                <SearchTypeSwitcher
                  typeOfQuery={typeOfQuery}
                  handleChangeType={this.handleChangeType}
                />
                <Link
                  to={`/search/${typeOfQuery}?query=${query}`}
                  className={styles.searchByBtn}
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
