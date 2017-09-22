import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SearchTypeSwitcher.scss';

class SearchTypeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.cx = classNames.bind(styles);
    this.state = {
      searchBy: 'title',
    };
  }

  handleChangeSearchType = (e) => {
    this.setState({
      searchBy: e.target.getAttribute('data-sortby'),
    });
  };

  handleSearchType = () => {
    this.props.handleSearchType(this.state.searchBy);
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
        <button
          className={this.cx('search', 'searchByBtn')}
          onClick={this.handleSearchType}
        >
          Search
        </button>
      </div>
    );
  }
}

SearchTypeSwitcher.propTypes = {
  handleSearchType: PropTypes.func,
};

SearchTypeSwitcher.defaultProps = {
  handleSearchType: () => {},
};

export default SearchTypeSwitcher;
