import React from 'react';
import styles from './SortBy.scss';
import classNames from 'classnames/bind';

function SortBy(props) {
    const cx = classNames.bind(styles);
    return ( props.moviesNumber ?
        <div className={styles.sortByGroup}>
            <span className={styles.sortBy}>Sort by</span>
            <button className={cx('releaseDay', 'sortByBtn')}>release day</button>
            <button className={cx('rating', 'sortByBtn', 'active')}>rating</button>
        </div> : null
    )
}

export default SortBy;
