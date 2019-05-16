import React from 'react';
import styles from './styles.module.scss';

const Typography = ({ onSelectIcon, active }) => (
  <div onClick={() => onSelectIcon('typography')} className={styles['svg-icon']}>
    <svg xmlns="http://www.w3.org/2000/svg" width="38.14" height="38.14" viewBox="0 0 38.14 38.14">
      <g transform="translate(0)">
        <path className={`${styles.typography} ${active ? styles.active : ''}`} d="M2.5,4V8.768h7.946v19.07h4.767V8.768h7.946V4Zm30.194,7.946h-14.3v4.767h4.767V27.837h4.767V16.713h4.768Z" transform="translate(1.473 2.357)" />
      </g>
    </svg>
  </div>
);

export default Typography;
