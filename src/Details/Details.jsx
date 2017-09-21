import PropTypes from 'prop-types';
import React from 'react';
import styles from './Details.scss';

const Details = (props) => {
  const { handleShowSearch } = props;
  const { asset } = props.movieDetails;
  return (
    <section>
      <div className={styles.detailsWrapper}>
        <div className={styles.details}>
          <div className={styles.logoBlock}>
            <div className={styles.logo}>Netflixtrullete</div>
            <button
              className={styles.searchBtn}
              type="button"
              onClick={handleShowSearch}
            >
              Search
            </button>
          </div>
          <div className={styles.content}>
            <div>
              <img src={asset.poster} alt={asset.show_title} />
            </div>
            <div className={styles.description}>
              <h2 className={styles.movieTitle}>
                {asset.show_title}
                <span className={styles.movieRating}>
                  {asset.rating}
                </span>
              </h2>
              <div className={styles.movieGenre}>{asset.category}</div>
              <div className={styles.movieInfo}>
                <div className={styles.movieYear}>{asset.release_year}</div>
                <div className={styles.movieTime}>{asset.runtime}</div>
              </div>
              <article className={styles.text}>
                {asset.summary}
              </article>
              <p className={styles.additionalInfo}>
                <span>Director: </span>
                {asset.director}
              </p>
              <p className={styles.additionalInfo}>
                <span>Cast: </span>
                {asset.show_cast}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Details.propTypes = {
  movieDetails: PropTypes.objectOf(PropTypes.shape({})).isRequired,
  handleShowSearch: PropTypes.func.isRequired,
};

export default Details;
