import React from 'react';
import styles from './styles.module.scss';

const Hamburger = ({ onOpenMenu }) => (
  <div onClick={onOpenMenu} className={styles.hamburger}>
    <div className={styles['hamburger-line']} />
    <div className={styles['hamburger-line']} />
    <div className={styles['hamburger-line']} />
  </div>
);

export default Hamburger;
