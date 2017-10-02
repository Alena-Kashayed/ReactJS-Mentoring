import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './Search/Search';
import Details from './Details/Details';
import MovieList from './MovieList/MovieList';
import Footer from './Footer/Footer';
import styles from './App.scss';
import InfoBar from './InfoBar/InfoBar';
import SortBy from './SortBy/SortBy';

const App = () => (
  <div className={styles.app}>
    <div className={styles.headerBlock}>
      <Switch>
        <Route path="/film/:id" component={Details} />
        <Route path="/" component={Search} />
      </Switch>
      <div className={styles.info}>
        <InfoBar />
        <SortBy />
      </div>
    </div>
    <div className={styles.contentBlock}>
      <MovieList />
    </div>
    <div className={styles.footerBlock}>
      <Footer />
    </div>
  </div>
);

export default App;
