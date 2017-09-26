import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './Search/Search';
import Details from './Details/Details';
import MovieList from './MovieList/MovieList';
import Footer from './Footer/Footer';
import styles from './App.scss';
import InfoBar from './InfoBar/InfoBar';
import SortBy from './SortBy/SortBy';
import NotFound from './NotFound/NotFound';
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

  render() {
    const { assets, movieDetails } = this.state;
    const SearchRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props => (
          <Component
            moviesCount={assets.length}
            {...props}
          />)}
      />
    );
    const MovieDetailsRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props => (
          <Component
            movieDetails={movieDetails}
            {...props}
          />)}
      />
    );

    return (
      <div className={styles.app}>
        <div className={styles.headerBlock}>
          <Switch>
            <SearchRoute exact path="/" component={Search} />
            <SearchRoute path="/search" component={Search} />
            <MovieDetailsRoute path="/film/:title" component={Details} />
            <Route
              path="*"
              render={() =>
                <NotFound />}
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
          <Route
            exact
            path="/"
            render={() =>
              <div className={styles.emptyPage}>No films found</div>
            }
          />
          <Route
            path="/search"
            render={() => (<MovieList
              assets={assets}
              handleShowDetails={this.handleShowDetails}
            />)}
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
