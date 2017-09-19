import React from 'react';
import styles from './MovieAsset.scss';

function MovieAsset(props) {
    const showDetails = () => {
        props.showDetails(props);
    };

    return (
        <div className={styles.movieAsset}>
            <img className={styles.moviePoster} src={props.url} alt={props.name} onClick={showDetails}/>
            <div className={styles.movieTitle}>
                <div>{props.name}</div>
                <div className={styles.movieYear}>{props.year}</div>
            </div>
            <div className={styles.movieGenre}>{props.genre}</div>
        </div>
    );
}

export default MovieAsset;
