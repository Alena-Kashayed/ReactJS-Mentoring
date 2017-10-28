import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';
import { getFilmList } from '../actions';

class MovieList extends Component {
  componentDidMount = () => {
    const { dispatch, location } = this.props;
    if (/^\/search\//.test(location.pathname)) {
      const params = new URLSearchParams(location.search);
      if (params.get('query')) {
        getFilmList(
          params.get('query'),
          location.pathname.split('/')[2],
          dispatch,
        );
      }
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { location, dispatch } = this.props;
    const typeOfQuery = location.pathname.split('/')[2];
    const newTypeOfQuery = nextProps.location.pathname.split('/')[2];
    if (/^\/search\//.test(nextProps.location.pathname)) {
      if (/^\/search\//.test(location.pathname) && (nextProps.location.search !== location.search || typeOfQuery !== newTypeOfQuery)) {
        const params = new URLSearchParams(nextProps.location.search);
        if (params.get('query')) {
          getFilmList(
            params.get('query'),
            newTypeOfQuery,
            dispatch,
          );
        }
      }
    }
  };
  render() {
    const { assets } = this.props;
    return (
      assets.length ?
        <div className={styles.movieList}>
          {assets.map(asset => (
            <MovieAsset
              key={asset.id}
              asset={asset}
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
};

const mapStateToProps = state => (
  state.films.results ? { assets: state.films.results } : { assets: [] }
);

export default withRouter(connect(mapStateToProps)(MovieList));
