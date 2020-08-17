import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';
import logo from '../../assets/images/logo.png';

const Navbar = ({ back }) => (
  <div className={styles.Navbar}>
    <Link to="/" title="World Data Home Page">
      <img src={logo} alt="World Data Logo" />
    </Link>
    { back && <Link to="/" title="Back to Main Page">&lt; Back to Main Page</Link>}
  </div>
);

Navbar.propTypes = {
  back: PropTypes.bool,
};

Navbar.defaultProps = {
  back: false,
};

export default Navbar;
