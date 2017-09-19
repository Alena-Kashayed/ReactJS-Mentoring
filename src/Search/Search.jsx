import React from 'react';
import styles from './Search.scss';
import SearchTypeSwitcher from './SearchTypeSwitcher/SearchTypeSwitcher';
import InfoBar from './InfoBar/InfoBar';
import SortBy from './SortBy/SortBy';

class Search extends React.Component {
    render() {
        return (
            <section className={styles.searchWrapper}>
                <div className={styles.search}>
                    <div className={styles.content}>
                        <div className={styles.logo}>Netflixtrullete</div>
                        <label className={styles.searchLabel} htmlFor="search">
                            Find your movie
                        </label>
                        <input
                            className={styles.searchInput}
                            type="text"
                            placeholder="Quentin Tarantino"
                        />
                        <SearchTypeSwitcher />
                    </div>
                </div>
                <div className={styles.info}>
                    <InfoBar/>
                    <SortBy/>
                </div>
            </section>
        );
    }
}

export default Search;
