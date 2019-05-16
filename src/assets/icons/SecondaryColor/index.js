import React from 'react';
import styles from './styles.module.scss';

const SecondaryColor = ({ active }) => (
  <div className={styles['svg-icon']}>
    <svg xmlns="http://www.w3.org/2000/svg" width="38.137" height="38.137" viewBox="0 0 38.137 38.137">
      <g transform="translate(0)">
        <path
          className={`${styles.secondary} ${active ? styles.active : ''}`}
          d="M25.706,11.264,16.712,2.27,7.718,11.264a12.714,12.714,0,1,0,17.988,0ZM16.712,29.792A9.528,9.528,0,0,1,9.975,13.52l6.737-6.753Z"
          transform="translate(2.356 1.337)"
        />
      </g>
    </svg>
  </div>
);

export default SecondaryColor;
