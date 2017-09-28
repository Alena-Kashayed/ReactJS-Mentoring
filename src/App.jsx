import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
        <Route exact path="/" component={Search} />
        <Route path="/search" component={Search} />
        <Route path="/film/:title" component={Details} />
        <Redirect from="*" to="/search/" />
      </Switch>
      <div className={styles.info}>
        <InfoBar />
        <SortBy />
      </div>
    </div>
    <div className={styles.contentBlock}>
      <Route path="/" component={MovieList} />
    </div>
    <div className={styles.footerBlock}>
      <Footer />
    </div>
  </div>
);

export default App;
