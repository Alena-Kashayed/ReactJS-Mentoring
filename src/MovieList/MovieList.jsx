import React, { Component } from 'react';
import { withRouter } from 'react-router';

import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';
import data from '../assets/data.json';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
    };
  }

  componentDidMount = () => {
    if (/^\/search$/.test(this.props.location.pathname)) {
      const params = new URLSearchParams(this.props.location.search);
      if (
        params.get('name') !== null &&
        params.get('name') !== '' &&
        /^(title|director)$/.test(params.get('type'))
      ) {
        this.setState({
          assets: data,
        });
      }
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { location } = this.props;
    if (/^\/search$/.test(nextProps.location.pathname)) {
      if (/^\/search$/.test(location.pathname) && nextProps.location.search !== location.search) {
        const params = new URLSearchParams(nextProps.location.search);
        if (
          params.get('name') !== null &&
          params.get('name') !== '' &&
          /^(title|director)$/.test(params.get('type'))
        ) {
          this.setState({
            assets: data,
          });
        } else {
          this.state = {
            assets: [],
          };
        }
      }
    }
  };
  render() {
    return (
      this.state.assets.length ?
        <div className={styles.movieList}>
          {this.state.assets.map(asset => (
            <MovieAsset
              key={asset.show_id}
              asset={asset}
            />
          ))}
        </div> :
        <div className={styles.emptyPage}>No films found</div>
    );
  }
}

export default withRouter(MovieList);
