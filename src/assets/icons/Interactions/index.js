import React from 'react';
import styles from './styles.module.scss';

const Interactions = ({ selectOne, active, enlarge }) => (

  <div>
    <div onClick={() => selectOne('interactions')} className={styles['svg-icon']}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38.14"
        height="38.14"
        viewBox="0 0 38.14 38.14"
      >
        <g transform="translate(0)">
          <path
            className={`${styles.interactions} ${active ? styles.active : ''}`}
            d="M11.5,16.095V10.151a3.973,3.973,0,1,1,7.946,0v5.943a7.151,7.151,0,1,0-7.946,0Zm15.637,7.358-7.215-3.592a2.238,2.238,0,0,0-.858-.175H17.861V10.151a2.384,2.384,0,1,0-4.767,0V27.219L7.642,26.075a2.777,2.777,0,0,0-.381-.048,1.778,1.778,0,0,0-1.255.524L4.75,27.823l7.85,7.85a2.392,2.392,0,0,0,1.685.7h10.79a2.315,2.315,0,0,0,2.288-2.034l1.192-8.375a2.284,2.284,0,0,0-1.414-2.511Z"
            transform="translate(2.799 1.768)"
          />
        </g>
      </svg>
    </div>
    {enlarge ? <Child /> : ''}
  </div>
);

const Child = () => (
  <div className={`${styles.label}`}>
    <strong> Interactions </strong>
  </div>
);


export default Interactions;
