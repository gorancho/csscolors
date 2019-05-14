import React from 'react';
import styles from './styles.module.scss';
import MainMenu from 'components/MainMenu';

const HomePage = () => (
  <div className={styles['home-page']}>
    <MainMenu />
  </div>
);

export default HomePage;
