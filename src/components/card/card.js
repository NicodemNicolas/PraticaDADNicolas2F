import React from 'react';
import styles from '../card/card.module.css'
import CardH2 from '../CardH2/cardh2.js';

const Card = ({plano, valor, cor}) => {
  return (
    <div className={styles.container}>
      <h1>{plano}</h1>
      <CardH2 />
      <p className={styles.valor}>{valor}</p>
      <p>Per month</p>
      <button className={styles.button}>Try now</button>
    </div>
  );
};

export default Card;