import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';
import { getFilms } from '../actions';

class MovieList extends Component {
  componentDidMount = () => {
    const { location } = this.props;
    if (/^\/search\//.test(location.pathname)) {
      this.checkQuery(location);
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { location } = this.props;
    const typeOfQuery = location.pathname.split('/')[2];
    const newTypeOfQuery = nextProps.location.pathname.split('/')[2];
    if (/^\/search\//.test(nextProps.location.pathname)) {
      if (nextProps.location.search !== location.search || typeOfQuery !== newTypeOfQuery) {
        this.checkQuery(nextProps.location);
      }
    }
  };

  typeOfQuery;

  checkQuery = (location) => {
    const { dispatch } = this.props;
    const params = new URLSearchParams(location.search);
    if (params.get('query')) {
      this.typeOfQuery = location.pathname.split('/')[2];
      dispatch(getFilms(params.get('query'), this.typeOfQuery));
    }
  };

  sortAssets = (assets, sortBy) => {
    const sortAssets = assets;
    switch (sortBy) {
      case 'releaseDay':
        sortAssets.sort((item1, item2) => {
          const releaseDate1 = new Date(item1.release_date);
          const releaseDate2 = new Date(item2.release_date);
          return releaseDate2.getTime() - releaseDate1.getTime();
        });
        return sortAssets;
      case 'rating':
        sortAssets.sort((item1, item2) => (
          item2.vote_average - item1.vote_average
        ));
        return sortAssets;
      default:
        return sortAssets;
    }
  };

  render() {
    const { assets, sortBy } = this.props;
    const sortAssets = this.sortAssets(assets, sortBy);
    return (
      sortAssets.length ?
        <div className={styles.movieList}>
          {sortAssets.map(asset => (
            <MovieAsset
              key={asset.id}
              asset={asset}
              typeOfQuery={this.typeOfQuery}
            />
          ))}
        </div> :
        <div className={styles.emptyPage}>No films found</div>
    );
  }
}

MovieList.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.bool,
      backdrop_path: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number,
      original_language: PropTypes.string,
      original_title: PropTypes.string,
      overview: PropTypes.string,
      popularity: PropTypes.number,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      title: PropTypes.string,
      video: PropTypes.bool,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
    }).isRequired,
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
};

MovieList.defaultProps = {
  sortBy: '',
};

const mapStateToProps = state => ({
  assets: state.films.results,
  sortBy: state.sortBy.value,
});

export default withRouter(connect(mapStateToProps)(MovieList));
