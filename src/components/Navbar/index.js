import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => (
  <div className={styles.Navbar}>
    <img src={logo} alt="World Data Logo" />
  </div>
);

export default Navbar;
