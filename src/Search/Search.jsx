import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Search.scss';
import SearchTypeSwitcher from './SearchTypeSwitcher/SearchTypeSwitcher';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
    };
  }
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.setState({
      name: params.get('name') || '',
      type: params.get('type') || 'title',
    });
  }
  handleChangeSearch = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeType = (type) => {
    this.setState({
      type,
    });
  };
  render() {
    const { name, type } = this.state;
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
                value={name}
                onChange={this.handleChangeSearch}
              />
              <div className={styles.switcherGroup}>
                <SearchTypeSwitcher
                  type={type}
                  handleChangeType={this.handleChangeType}
                />
                <Link to={`/search?name=${name}&type=${type}`} className={styles.searchByBtn}>
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
