import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.assets = props.assets;
    this.handleShowDetails = props.handleShowDetails;
  }

  componentWillReceiveProps = (nextProps) => {
    const { location } = this.props;
    if (location.search !== nextProps.location.search) {
      if (/name=([\w]*[\s]*)*&type=(title|director)/.test(nextProps.location.search)) {
        this.setState({
          assets: nextProps.assets,
        });
      }
    }
  };

  handleShowMovieDetails = (movieDetails) => {
    this.handleShowDetails(movieDetails);
  };

  render() {
    return (
      <div className={styles.movieList}>
        {this.assets.map(asset => (
          <MovieAsset
            key={asset.show_id}
            asset={asset}
            handleShowDetails={this.handleShowMovieDetails}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  handleShowDetails: PropTypes.func,
  assets: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    director: PropTypes.string,
    mediatype: PropTypes.number,
    poster: PropTypes.string,
    rating: PropTypes.string,
    release_year: PropTypes.string,
    runtime: PropTypes.string,
    show_cast: PropTypes.string,
    show_id: PropTypes.number,
    show_title: PropTypes.string,
    summary: PropTypes.string,
    unit: PropTypes.number,
  })).isRequired,
  location: PropTypes.PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: undefined,
  }).isRequired,
};

MovieList.defaultProps = {
  handleShowDetails: () => {},
};

export default withRouter(MovieList);
