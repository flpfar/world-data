import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './styles.module.css';

const Page404 = () => (
  <>
    <Navbar back />
    <div className={styles.PageContainer}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  </>
);

export default Page404;
