import React from 'react';
import styles from './styles.module.scss';

const PrimaryColor = ({ selectOne, active, enlarge }) => (
  <div>
    <div onClick={() => selectOne('primary')} className={`${styles['svg-icon']}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="38.137" height="38.137" viewBox="0 0 38.137 38.137">
        <g transform="translate(0)">
          <path className={`${styles.primary} ${active ? styles.active : ''}`} d="M 3.719 26.966 a 12.717 12.717 0 0 1 0 -17.972 L 12.713 0 l 8.994 8.994 A 12.714 12.714 0 0 1 3.719 26.966 Z" transform="translate(6.356 3.607)" />
        </g>
      </svg>
    </div>
    {enlarge ? <Child /> : ''}
  </div>
);

const Child = () => (
  <div className={`${styles.label}`}>
    <strong> Primary color </strong>
  </div>
);

export default PrimaryColor;
