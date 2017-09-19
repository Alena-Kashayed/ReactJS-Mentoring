import React from 'react';
import styles from './Details.scss';

function Details(props) {
    const movieDetails = props.movieDetails;

    return (
        <section>
            <div className={styles.detailsWrapper}>
                <div className={styles.details}>
                    <div className={styles.logoBlock}>
                        <div className={styles.logo}>Netflixtrullete</div>
                        <button className={styles.searchBtn} type="button" onClick={props.showSearch}>Search</button>
                    </div>
                    <div className={styles.content}>
                        <div>
                            <img src={movieDetails.url} alt={movieDetails.name}/>
                        </div>
                        <div className={styles.description}>
                            <h2 className={styles.movieTitle}>{movieDetails.name}<span className={styles.movieRating}>{movieDetails.rating}</span></h2>
                            <div className={styles.movieGenre}>{movieDetails.genre}</div>
                            <div className={styles.movieInfo}>
                                <div className={styles.movieYear}>{movieDetails.year}</div>
                                <div className={styles.movieTime}>{movieDetails.runtime}</div>
                            </div>

                            <article className={styles.text}>{movieDetails.description}</article>
                            <p className={styles.additionalInfo}>
                                <span>Director:&nbsp;</span>
                                {movieDetails.director}
                            </p>
                            <p className={styles.additionalInfo}>
                                <span>Cast:&nbsp;</span>
                                {movieDetails.cast}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div>Films by {movieDetails.director}</div>
            </div>
        </section>
    );
}

export default Details;
