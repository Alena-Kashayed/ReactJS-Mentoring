import React, { Component } from 'react';
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
      onShowSearch: true,
      showMovieList: true,
      assets: data,
    };
  }

  handleShowDetails = (movieDetails) => {
    this.setState({
      onShowSearch: false,
      movieDetails,
    });
  };

  handleShowSearch = () => {
    this.setState({
      onShowSearch: true,
    });
  };

  render() {
    const { assets, onShowSearch, movieDetails, showMovieList } = this.state;
    return (
      <div className={styles.app}>
        <div className={styles.headerBlock}>
          {onShowSearch ? (
            <Search moviesCount={assets.length} />
          ) : (
            <Details
              movieDetails={movieDetails}
              handleShowSearch={this.handleShowSearch}
            />
          )}
          {showMovieList ? (
            <div className={styles.info}>
              <InfoBar
                movieDetails={movieDetails}
                moviesCount={assets.length}
                onShowSearch={onShowSearch}
              />
              <SortBy
                onShowSearch={onShowSearch}
              />
            </div>) : <div className={styles.info}>{null}</div>
          }
        </div>
        <div className={styles.contentBlock}>
          {showMovieList ? (
            <MovieList
              assets={assets}
              handleShowDetails={this.handleShowDetails}
            />
          ) : (
            <div className={styles.emptyPage}>No films found</div>
          )}
        </div>
        <div className={styles.footerBlock}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
