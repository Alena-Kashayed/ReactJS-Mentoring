import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Details.scss';

const Details = (props) => {
  const {
    title,
    release_date: releaseDate,
    poster_path: poster,
    vote_average: rating,
    overview: summary,
  } = props.film;
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
                src={`https://image.tmdb.org/t/p/w300${poster}`}
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
                <div className={styles.movieYear}>{releaseDate.split('-')[0]}</div>
              </div>
              <article className={styles.text}>
                {summary}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
};

const mapStateToProps = state => ({
  film: state.reducer.currentFilm,
});

export default connect(mapStateToProps)(Details);
