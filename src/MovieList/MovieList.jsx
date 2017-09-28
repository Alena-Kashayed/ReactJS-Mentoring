import React, { Component } from 'react';
import { withRouter } from 'react-router';

import MovieAsset from './MovieAsset/MovieAsset';
import styles from './MovieList.scss';
import data from '../assets/data.json';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: data,
    };
  }

  componentWillMount = () => {
    if (!(/name=([\w]*[\s]*)*&type=(title|director)/.test(this.props.location.search))) {
      this.setState({
        assets: [],
      });
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { location } = this.props;
    if (/name=([\w]*[\s]*)*&type=(title|director)/.test(nextProps.location.search)) {
      if (location.search !== nextProps.location.search) {
        this.setState({
          assets: data,
        });
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
