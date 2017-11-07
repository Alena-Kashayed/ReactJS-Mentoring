import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Details.scss';
import { getCurrentFilm } from '../actions/index';

class Details extends Component {
  componentDidMount = () => {
    const { dispatch, location } = this.props;
    const pathnameArray = location.pathname.split('/');
    dispatch(getCurrentFilm(pathnameArray[2], pathnameArray[3]));
  };

  componentWillReceiveProps = (nextProps) => {
    const { location, dispatch } = this.props;
    const pathnameArray = location.pathname.split('/');
    const typeOfQuery = pathnameArray[2];
    const id = pathnameArray[3];
    const newPathnameArray = nextProps.location.pathname.split('/');
    const newTypeOfQuery = newPathnameArray[2];
    const newId = newPathnameArray[3];
    if (typeOfQuery !== newTypeOfQuery || id !== newId) {
      dispatch(getCurrentFilm(newTypeOfQuery, newId));
    }
  };

  render() {
    const { film } = this.props;
    const {
      title,
      release_date: releaseDate,
      first_air_date: firstAirDate,
      poster_path: poster,
      vote_average: rating,
      overview: summary,
      runtime,
    } = film;
    return (
      <section>
        <div className={styles.detailsWrapper}>
          <div className={styles.details}>
            <div className={styles.logoBlock}>
              <div className={styles.logo}>Netflixtrullete</div>
              <Link to="/search" className={styles.searchBtn}>
                Search
              </Link>
            </div>
            <div className={styles.content}>
              <div>
                <img
                  src={
                    poster
                      ? `https://image.tmdb.org/t/p/w300${poster}`
                      : ''
                  }
                  alt={title}
                />
              </div>
              <div className={styles.description}>
                <h2 className={styles.movieTitle}>
                  {title}
                  <span className={styles.movieRating}>
                    {rating}
                  </span>
                </h2>
                <div className={styles.movieInfo}>
                  {releaseDate
                    ? <div className={styles.movieYear}>{releaseDate.split('-')[0]}</div>
                    : null}
                  {firstAirDate
                    ? <div className={styles.movieYear}>{firstAirDate.split('-')[0]}</div>
                    : null}
                </div>
                <div className={styles.movieTime}>{runtime}</div>
                <article className={styles.text}>
                  {summary}
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Details.propTypes = {
  film: PropTypes.shape({
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  film: state.currentFilm,
});

export default connect(mapStateToProps)(Details);
