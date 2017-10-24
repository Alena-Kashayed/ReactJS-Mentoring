import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Search.scss';
import SearchTypeSwitcher from './SearchTypeSwitcher/SearchTypeSwitcher';
import { fetchFilms } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      typeOfQuery: '',
    };
  }
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.setState({
      query: params.get('query') || '',
      typeOfQuery: 'movie',
    }, this.searchFilm);
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
  searchFilm = () => {
    const { query, typeOfQuery } = this.state;
    const { dispatch } = this.props;
    if (query !== '') {
      fetchFilms(query, typeOfQuery)(dispatch);
    }
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
                  onClick={this.searchFilm}
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

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Search);
