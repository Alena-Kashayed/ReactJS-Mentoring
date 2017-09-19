import React from 'react';
import styles from './InfoBar.scss';

function InfoBar(props) {
    return props.moviesNumber ? <div className={styles.infoBar}>7 movies found</div> : null;
}

export default InfoBar;
