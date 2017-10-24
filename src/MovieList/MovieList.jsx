import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
    };
  }

  componentDidMount = () => {
    if (/^\/search\//.test(this.props.location.pathname)) {
      const params = new URLSearchParams(this.props.location.search);
      if (
        params.get('query') !== null &&
        params.get('query') !== ''
      ) {
        this.setState({
          assets: this.props.assets,
        });
      }
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if (/^\/search\//.test(nextProps.location.pathname)) {
      const params = new URLSearchParams(nextProps.location.search);
      if (
        params.get('query') !== null &&
        params.get('query') !== ''
      ) {
        this.setState({
          assets: nextProps.assets,
        });
      } else {
        this.state = {
          assets: [],
        };
      }
    }
  };
  render() {
    return (
      this.state.assets.length ?
        <div className={styles.movieList}>
          {this.state.assets.map(asset => (
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
};

const mapStateToProps = state => (
  state.reducer.results ? { assets: state.reducer.results.results } : { assets: [] }
);

export default withRouter(connect(mapStateToProps)(MovieList));
