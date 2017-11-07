import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Loader.scss';

const Loader = ({ status }) => {
  const cx = classNames.bind(styles);
  return (
    status ?
      <div className={styles.loader}>
        <div className={styles.preloader1}>
          <div>Loading</div>
          <span className={cx('line', 'line1')} />
          <span className={cx('line', 'line2')} />
          <span className={cx('line', 'line3')} />
          <span className={cx('line', 'line4')} />
          <span className={cx('line', 'line5')} />
          <span className={cx('line', 'line6')} />
          <span className={cx('line', 'line7')} />
          <span className={cx('line', 'line8')} />
          <span className={cx('line', 'line9')} />
        </div>
      </div> : null
  );
};

Loader.propTypes = {
  status: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  status: state.loader.status,
});

export default connect(mapStateToProps)(Loader);
