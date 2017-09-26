import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Details.scss';

const Details = ({ movieDetails }) => (
  <section>
    <div className={styles.detailsWrapper}>
      <div className={styles.details}>
        <div className={styles.logoBlock}>
          <div className={styles.logo}>Netflixtrullete</div>
          <Link to="/search/" className={styles.searchBtn}>
              Search
          </Link>
        </div>
        <div className={styles.content}>
          <div>
            <img src={movieDetails.poster} alt={movieDetails.show_title} />
          </div>
          <div className={styles.description}>
            <h2 className={styles.movieTitle}>
              {movieDetails.show_title}
              <span className={styles.movieRating}>
                {movieDetails.rating}
              </span>
            </h2>
            <div className={styles.movieGenre}>{movieDetails.category}</div>
            <div className={styles.movieInfo}>
              <div className={styles.movieYear}>{movieDetails.release_year}</div>
              <div className={styles.movieTime}>{movieDetails.runtime}</div>
            </div>
            <article className={styles.text}>
              {movieDetails.summary}
            </article>
            <p className={styles.additionalInfo}>
              <span>Director: </span>
              {movieDetails.director}
            </p>
            <p className={styles.additionalInfo}>
              <span>Cast: </span>
              {movieDetails.show_cast}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Details.propTypes = {
  movieDetails: PropTypes.shape({
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
  }).isRequired,
};

export default Details;
