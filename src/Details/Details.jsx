import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Details.scss';
import data from '../assets/data.json';

const id = 0;
const movieDetails = data[id];

const Details = () => (
  <section>
    <div className={styles.detailsWrapper}>
      <div className={styles.details}>
        <div className={styles.logoBlock}>
          <div className={styles.logo}>Netflixtrullete</div>
          <Link to="/" className={styles.searchBtn}>
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

export default Details;
