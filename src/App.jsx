import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Search from './Search/Search';
import Details from './Details/Details';
import MovieList from './MovieList/MovieList';
import Footer from './Footer/Footer';
import styles from './App.scss';
import InfoBar from './InfoBar/InfoBar';
import SortBy from './SortBy/SortBy';
import data from './assets/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: data,
      // assets: [], // No films found
    };
  }

  handleShowDetails = (movieDetails) => {
    this.setState({
      movieDetails,
    });
  };

  handleShowSearch = () => {
    this.setState({
      movieDetails: null,
    });
  };

  render() {
    const { assets, movieDetails } = this.state;

    return (
      <div className={styles.app}>
        <div className={styles.headerBlock}>
          <Switch>
            <Route
              path="/search"
              component={props =>
                (<Search
                  location={props.location}
                  moviesCount={assets.length}
                />)
              }
            />
            <Route
              path="/film/:title"
              component={props =>
                (<Details
                  match={props.match}
                  movieDetails={movieDetails}
                  handleShowSearch={this.handleShowSearch}
                />)
              }
            />
            <Redirect
              from="*"
              to="/search/"
            />
          </Switch>
          {assets.length ? (
            <div className={styles.info}>
              <InfoBar
                movieDetails={movieDetails}
                moviesCount={assets.length}
              />
              <SortBy
                movieDetails={movieDetails}
              />
            </div>) : <div className={styles.info}>{null}</div>
          }
        </div>
        <div className={styles.contentBlock}>
          <MovieList
            assets={assets}
            handleShowDetails={this.handleShowDetails}
          />
        </div>
        <div className={styles.footerBlock}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
