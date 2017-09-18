import React from 'react';
import styles from './Search.scss';
import SearchTypeSwitcher from './SearchTypeSwitcher/SearchTypeSwitcher';

class Search extends React.Component {
    render() {
        return (
            <section className={styles.search}>
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
            </section>
        );
    }
}

export default Search;
