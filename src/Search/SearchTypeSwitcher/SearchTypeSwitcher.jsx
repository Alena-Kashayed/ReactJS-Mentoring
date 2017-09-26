import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchTypeSwitcher.scss';

class SearchTypeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.cx = classNames.bind(styles);
    this.state = {
      searchBy: props.searchBy ? props.searchBy : 'title',
    };
  }

  handleChangeSearchType = (e) => {
    this.setState({
      searchBy: e.target.getAttribute('data-sortby'),
    });
  };

  render() {
    return (
      <div className={styles.SearchTypeSwitcher}>
        <div className={styles.searchByGroup}>
          <span className={styles.searchBy}>Search by</span>
          <button
            className={this.cx('searchByTitle', 'searchByBtn', (this.state.searchBy === 'title' ?
              'active' :
              ''))}
            onClick={this.handleChangeSearchType}
            data-sortby="title"
          >
            Title
          </button>
          <button
            className={this.cx('searchByDirector', 'searchByBtn', (this.state.searchBy === 'director' ?
              'active' :
              ''))}
            onClick={this.handleChangeSearchType}
            data-sortby="director"
          >
            Director
          </button>
        </div>
        <Link to={`/search?${this.state.searchBy}=${this.props.search}`}>
          <button
            className={this.cx('search', 'searchByBtn')}
          >
            Search
          </button>
        </Link>
      </div>
    );
  }
}

SearchTypeSwitcher.propTypes = {
  search: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
};

export default SearchTypeSwitcher;
